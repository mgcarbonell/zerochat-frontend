import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container:{
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5%',
    marginTop: '3px'
  },
  sentBy: {
    display: 'flex',
    alignItems: 'center',
    color: '#F25476',
    letterSpacing: '0.3px'
  },
  sentByUser: {
    display: 'flex',
    alignItems: 'center',
    color: '#1E91D6',
    letterSpacing: '0.3px'
  },
  textBox: {
    padding: '5px 20px',
    display: 'inline-block',
    maxWidth: '80%'
  },
  text: {
    maxWidth: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    color: '#7CB518'
  },
  justifyEnd:{
    justifyContent: 'flex-end'
  }
}));

const ChatMessage = ({ message: {text, user}, username }) => {

  const classes = useStyles();
  
  let sentByCurrentUser = false;

  const trimmedUsername = username.trim().toLowerCase();

  if(user === trimmedUsername){
    sentByCurrentUser = true;
  }
  //message container -> username -> messageBox -> text
  return (
    sentByCurrentUser
    ? 
      ( 
        <div className={`classes.container ${classes.justifyEnd}`}>
          <Typography variant="body" className={classes.sentBy}>{trimmedUsername}</Typography>
          <div className={classes.textBox}>
            <Typography variant="body" className={classes.text}>{text}</Typography>
          </div>
        </div>
      )
    : 
      (
        <div className={`classes.container ${classes.justifyEnd}`}>
          <Typography variant="body" className={classes.sentByUser}>{user}</Typography>
          <div className={classes.textBox}>
            <Typography variant="body" className={classes.text}>{text}</Typography>
          </div>
        </div>
      )
  )
}

export default ChatMessage
