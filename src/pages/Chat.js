import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import queryString from 'query-string'
import io from "socket.io-client";
import {
        Card,
        TextField,
        IconButton
                    } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import CloseIcon from '@material-ui/icons/Close'

let socket; 

const Chat = ({ location }, props) => {

  const [username, setUsername] = useState('')
  const [node, setNode] = useState('')
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:4000'
  
  useEffect(() => {
    const { username, node } = queryString.parse(location.search)
  
    socket = io(ENDPOINT)
    console.log(socket)

    setUsername(username)
    setNode(node)
    console.log(username, node)
    socket.emit('join', { username, node });
    
    return () => {
      socket.off();
    }
  
  }, [ENDPOINT, location.search])

  useEffect(() => {
    // listen for messages + payloads
    socket.on('message', (message) => {
      // cannot mutate state, spread array
      setMessages([...messages, message])
    })
  }, [messages])

  // send message event handler
  const sendMessage = (event) => {
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <Card>
      <CardHeader
        avatar={
          <PublicSharpIcon />
        }
        title={ node }
        action={
          <IconButton
            variant="contained"
            aria-label="close"
            component={ Link } 
            to={'/join'}
          >
            <CloseIcon color="action"/>
          </IconButton>
        }
      />
      <CardContent>

      </CardContent>
      <CardActions>
        <TextField
          variant="outlined"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
      </CardActions>
      
    </Card>
  )
}


export default Chat;
