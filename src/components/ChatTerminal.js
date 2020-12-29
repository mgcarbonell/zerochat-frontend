import React from 'react';
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// let's make this the input bar

const useStyles = makeStyles(theme => ({
  terminalForm: {
    display: 'flex',
    borderTop: '2px solid #D3D3D3'
  },
  terminalText: {
    border: 'none',
    borderRadius: '0',
    padding: '5%',
    width: '80%',
    color: '#45C431'
  },
  button:{
    borderRadius: '0px',
    textTransform: 'uppercase',
    display: 'inline-block',
    border: 'none',
    width: '20%'
  }
}));

const ChatTerminal = ({ message, setMessage, sendMessage }) => {

  const classes = useStyles();

  return (
    <div>
      <form className={classes.terminalForm}>
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
    </div>
  )
}

export default ChatTerminal;
