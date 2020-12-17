import React from 'react'
import {
  Typography
} from '@material-ui/core'

const ChatMessage = ({ message: {text, user}, username }) => {
  
  let sentByCurrentUser = false;

  const trimmedUsername = username.trim().toLowerCase();

  if(user === trimmedUsername){
    sentByCurrentUser = true;
  }

  return (
    sentByCurrentUser
    ? ( //message container -> username -> messageBox -> text
      <div>
        <Typography variant="body">{trimmedUsername}</Typography>
        <div>
          <Typography variant="body">{text}</Typography>
        </div>
      </div>
    )
    : (
      <div>
        <div>
          <Typography variant="body">{text}</Typography>
        </div>
        <Typography variant="body">{user}</Typography>
      </div>
    )
  )
}

export default ChatMessage

// Styling notes:
// If we want to do it like iOS user sent messages appear
// on the right (justifyEnd) while other users messages appear
// on the left (justifyStart)