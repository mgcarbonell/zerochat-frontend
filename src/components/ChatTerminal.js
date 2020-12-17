import React from 'react';
import {
  Button,
  TextField,
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// let's make this the input bar

const useStyles = makeStyles(theme => ({
  terminalForm: {
    display: 'flex'

  },
  terminalText: {
    color: '#45C431'
  },
  button:{
    borderRadius: '0px'
  }
}));

const ChatTerminal = ({ message, setMessage, sendMessage }) => {

  const classes = useStyles();

  return (

    <div>
    <Box borderTop={1} borderColor="primary">
      <form>
        <Typography style={{ color: '#45C431', display: 'inline-block' }}>{`>`}</Typography>
          <TextField 
            type="text"
            placeholder=""
            value={ message }
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            InputProps={{
                  className: classes.terminalText
                }}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={(event) => sendMessage(event)}
          >
            send
          </Button>
      </form>
    </Box>
    </div>
  )
}

export default ChatTerminal;
