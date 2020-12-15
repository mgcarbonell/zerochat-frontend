import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from "socket.io-client";

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
      socket.emit('disconnect');
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
    <div>
      <div>
        <input 
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
      </div>
    </div>
  )
}


export default Chat;
