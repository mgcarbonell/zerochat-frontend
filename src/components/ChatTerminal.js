import React from 'react'
import Button from '@material-ui/core/Button'

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
        <Button 
          animate 
          layer='success' 
          onClick={(event) => sendMessage(event)}
        >
          send
        </Button>
      </form>
  )
}

export default ChatTerminal;
