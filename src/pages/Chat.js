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



const ENDPOINT = 'http://localhost:4000'
let socket; 

const Chat = ({ location }, props) => {
  const [username, setUsername] = useState('');
  const [node, setNode] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  
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
      setMessages(messages => [...messages, message]);
    });
    
    socket.on("nodeData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    };
  };

  console.log(message, messages);

  return (
      <Box>
        <Box>
          <ChatInfoBar node={ node } />
          <ChatMessages messages={ messages } username={ username }/>
          <ChatTerminal 
            message={ message }
            setMessage={ setMessage }
            sendMessage={ sendMessage }
          />
        </Box>
        <ConnectedUsers users = { users }/>
      </Box>
  );
};


export default Chat;
