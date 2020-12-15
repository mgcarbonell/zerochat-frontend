import React from 'react'

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
        <p>{trimmedUsername}</p>
        <div>
          <p>{text}</p>
        </div>
      </div>
    )
    : (
      <div>
        <div>
          <p>{text}</p>
        </div>
        <p>{user}</p>
      </div>
    )
  )
}

export default ChatMessage

// Styling notes:
// If we want to do it like iOS user sent messages appear
// on the right (justifyEnd) while other users messages appear
// on the left (justifyStart)