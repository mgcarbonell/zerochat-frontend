import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from "socket.io-client";
import ChatInfoBar from '../components/ChatInfoBar'
import ChatTerminal from '../components/ChatTerminal'
import ChatMessages from '../components/ChatMessages'
import ConnectedUsers from '../components/ConnectedUsers'
import {
        Box
                    } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Arwes, Frame } from 'arwes'


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1A1A1D"
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1D",
    borderRadius: "8px",
    height: "60%",
    width: "35%"
  }
}))
const ENDPOINT = 'http://localhost:4000'
let socket; 

const Chat = ({ location }) => {
  const [username, setUsername] = useState('');
  const [node, setNode] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const classes = useStyles();
  
  useEffect(() => {
    const { username, node } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setNode(node);
    setUsername(username);

    socket.emit('join', { username, node }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("nodeData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages)

  return (
    <Arwes>
      <Box className={classes.container}>
        <Frame
          animate={true}
          level={3}
          corners={4}
          layer='primary'
        >
          <Box className={classes.innerContainer}>
            <ChatInfoBar node={ node } />
            <ChatMessages messages={ messages } username={ username }/>
            <ChatTerminal 
              message={ message }
              setMessage={ setMessage }
              sendMessage={ sendMessage }
            />
          </Box>
        </Frame>
        <ConnectedUsers users = { users }/>
      </Box>
    </Arwes>
  )
}


export default Chat;
