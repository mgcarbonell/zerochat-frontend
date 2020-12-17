import React from 'react'
import {
  Button,
  TextField,
  Paper
} from '@material-ui/core'

// let's make this the input bar

const ChatTerminal = ({ message, setMessage, sendMessage }) => {

  return (
    <Paper 
      variant="outlined" 
      square
      style={{ display: 'inline-block' }}
    >
      <form>
        {'>'}
          <TextField 
            type="text"
            placeholder=""
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
    </Paper>
  )
}

export default ChatTerminal;
