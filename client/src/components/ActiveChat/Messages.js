import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const [messageBubble, setmessageBubble] = useState({
    isShowing: false,
    mId: null,
  });

  const checkLastRead = (message) => {
    const { isShowing } = messageBubble;
    if (!isShowing && message.read && message.senderId === userId) {
      setmessageBubble({ isShowing: true, mId: message.id });
    }
  }

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");
        checkLastRead(message);

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser} ReadBadge={messageBubble.mId === message.id}/>
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
