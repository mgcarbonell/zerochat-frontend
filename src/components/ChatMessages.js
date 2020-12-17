import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from './ChatMessage'
import {
  Paper
} from '@material-ui/core'

const ChatMessages = ({ messages, username}) => (
  <Paper>
    <ScrollToBottom>
      {messages.map((message, i) =>
        <div key={i}>
          <ChatMessage message={message} username={username}/>
        </div>)}
    </ScrollToBottom>
  </Paper>
)

export default ChatMessages