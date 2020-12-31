import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from './ChatMessage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  messages: {
    padding: '5% 0',
    overflow: 'auto',
    flex: 'auto',
    backgroundColor: '#191308'
  }
}));

const ChatMessages = ({ messages, username}) => {

  const classes = useStyles();

    return (
    <ScrollToBottom className={classes.messages}>
      {messages.map((message, i) =>
        <div key={i}>
          <ChatMessage message={message} username={username}/>
        </div>)}
    </ScrollToBottom>
    )
}

export default ChatMessages