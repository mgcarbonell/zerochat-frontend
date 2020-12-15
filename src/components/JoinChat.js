import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{ Arwes, Button } from 'arwes'

const JoinChat = (props) => {

  
  const [node, setNode] = useState('')
  let username = localStorage.getItem('username')

  return (
    <Arwes>
      <div>
        <div>
          <h1>Hello Citizen</h1>
          <h3>Where do you wish to connect on Ono-Sendai Net?</h3>
          <div>
            <input 
              placeholder="Node" 
              type="text" 
              onChange={(event) => setNode(event.target.value)}
            />
          </div>
          <Link 
            onClick={event => !node ? event.preventDefault() : null} 
            to={`/chat?name=${username}&node=${node}`}>
            <Button animate>Connect to Node</Button>
          </Link>
        </div>
      </div>
    </Arwes>
  )
}

export default JoinChat;