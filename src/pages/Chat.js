import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import ChatInfoBar from '../components/ChatInfoBar';
import ChatTerminal from '../components/ChatTerminal';
import ChatMessages from '../components/ChatMessages';
import ConnectedUsers from '../components/ConnectedUsers';
import { makeStyles } from '@material-ui/core/styles';


const ENDPOINT = 'https://zer0chatserver.herokuapp.com/';

let socket; 

const useStyles = makeStyles(theme => ({
  outerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#313738'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#343b36',
    height: '70%',
    width: '40%',
    
  },
  
}));

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
    <div className={classes.outerBox}>
      <div className={classes.box}>
        <ChatInfoBar 
          node={ node } 
        />
        <ChatMessages 
          messages={ messages } 
          username={ username }
        />
        <ChatTerminal 
          message={ message }
          setMessage={ setMessage }
          sendMessage={ sendMessage }
        />
      </div>
      <ConnectedUsers users={ users }/>
    </div>
  );
};


export default Chat;
