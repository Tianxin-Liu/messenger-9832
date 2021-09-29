from django.db import models
from django.db.models import Q

from . import utils
from .conversation import Conversation


class Message(utils.CustomModel):
    text = models.TextField(null=False)
    senderId = models.IntegerField(null=False)
    read = models.BooleanField(null=False, default=False)
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        db_column="conversationId",
        related_name="messages",
        related_query_name="message"
    )
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def mark_messages_read (senderId, conversation_id):
        try:
            data = {'read': True}
            return Message.objects.filter(
                Q(conversation_id=conversation_id),
                Q(senderId=senderId)
            ).update(**data)
        except Conversation.DoesNotExist:
            return None
