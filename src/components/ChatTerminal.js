import React from 'react'

// let's make this the input bar

const ChatTerminal = ({ message, setMessage, sendMessage }) => {

  return (
    <form>
      <input 
        type="text"
        placeholder="|>"
        value={ message }
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button onClick={(event) => sendMessage(event)}>send</button>
    </form>
  )
}

export default ChatTerminal;
