import React from 'react';
import {
  Button,
  TextField,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// let's make this the input bar

const useStyles = makeStyles(theme => ({
  terminal: {
    color: '#45C431'
  }
}));

const ChatTerminal = ({ message, setMessage, sendMessage }) => {

  const classes = useStyles();

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
            InputProps={{
                  className: classes.terminal
                }}
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
