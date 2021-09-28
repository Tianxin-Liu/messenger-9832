from django.contrib.auth.middleware import get_user
from django.http import HttpResponse, JsonResponse
from messenger_backend.models import Conversation, Message
from online_users import online_users
from rest_framework.views import APIView


class Messages(APIView):
    """expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)"""

    def post(self, request):
        try:
            user = get_user(request)

            if user.is_anonymous:
                return HttpResponse(status=401)

            sender_id = user.id
            body = request.data
            conversation_id = body.get("conversationId")
            text = body.get("text")
            recipient_id = body.get("recipientId")
            sender = body.get("sender")

            # if we already know conversation id, we can save time and just add it to message and return
            if conversation_id:
                conversation = Conversation.objects.filter(id=conversation_id).first()
                message = Message(
                    senderId=sender_id, text=text, conversation=conversation, read=False
                )
                message.save()
                message_json = message.to_dict()
                return JsonResponse({"message": message_json, "sender": body["sender"]})

            # if we don't have conversation id, find a conversation to m       ake sure it doesn't already exist
            conversation = Conversation.find_conversation(sender_id, recipient_id)
            if not conversation:
                # create conversation
                conversation = Conversation(user1_id=sender_id, user2_id=recipient_id)
                conversation.save()

                if sender and sender["id"] in online_users:
                    sender["online"] = True

            message = Message(senderId=sender_id, text=text, conversation=conversation, read=False)
            message.save()
            message_json = message.to_dict()
            return JsonResponse({"message": message_json, "sender": sender})
        except Exception as e:
            return HttpResponse(status=500)

    def put(self, request):
        try:
            user = get_user(request)
            if user.is_anonymous:
                return HttpResponse(status=401)

            body = request.data
            convoId = body.get("convoId")
            senderId = body.get("senderId")
            if not convoId or not senderId:
                return HttpResponse(status=400)

            conversation = Conversation.objects.filter(id=convoId).first()

            if conversation.user1_id != user.id and conversation.user2_id != user.id:
                return HttpResponse(status=403)

            Message.mark_messages_read(senderId, convoId)

            convo_dict = {
                "id": conversation.id,
                "messages": [
                    message.to_dict(["id", "text", "senderId", "createdAt"])
                    for message in conversation.messages.all()
                ],
            }

            convo_dict["latestMessageText"] = convo_dict["messages"][len(convo_dict["messages"]) - 1]["text"]

            user_fields = ["id", "username", "photoUrl"]
            if conversation.user1 and conversation.user1.id != user.id:
                convo_dict["otherUser"] = conversation.user1.to_dict(user_fields)
            elif conversation.user2 and conversation.user2.id != user.id:
                convo_dict["otherUser"] = conversation.user2.to_dict(user_fields)

            if convo_dict["otherUser"]["id"] in online_users:
                convo_dict["otherUser"]["online"] = True
            else:
                convo_dict["otherUser"]["online"] = False

            convo_dict["unreadMessageCount"] = 0

            return JsonResponse({"conversation": convo_dict})

        except Exception as e:
            print(e)
            return HttpResponse(status=500)