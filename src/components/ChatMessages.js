import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from './ChatMessage'

const ChatMessages = ({ messages, username}) => (
    <ScrollToBottom>
      {messages.map((message, i) =>
        <div key={i}>
          <ChatMessage message={message} username={username}/>
        </div>)}
    </ScrollToBottom>
)

export default ChatMessages