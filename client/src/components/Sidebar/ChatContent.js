import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unread: {
    fontWeight: "bold",
    color: 'inherit',
  },
  unreadNum: {
    height: 20,
    width: 20,
    display: "flex",
    backgroundColor: "#3399FF",
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessageCount } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={`${classes.previewText} ${unreadMessageCount > 0 && classes.unread}`}>
          {latestMessageText}
        </Typography>
      </Box>
      {unreadMessageCount > 0 && (
        <div className={classes.unreadNum}>
          {unreadMessageCount}
        </div>
      )}

    </Box>
  );
};

export default ChatContent;
