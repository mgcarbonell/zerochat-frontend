import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{ Arwes, Button, Heading, Puffs } from 'arwes'

const JoinChat = () => {

  
  const [node, setNode] = useState('')
  
  let username = localStorage.getItem('username')

  return (
    <Arwes>
      <Puffs>
        <div style={{ width: '100%', height: 500 }} />
      </Puffs>
        <div>
          <div>
            <Heading node='h2'>Where do you wish to connect on cyberspace?</Heading>
            <div>
              <input 
                placeholder="Node" 
                type="text" 
                onChange={(event) => setNode(event.target.value)}
              />
            </div>
            <Link 
              onClick={event => !node ? event.preventDefault() : null} 
              to={`/chat?username=${username}&node=${node}`}>
              <Button animate>Connect to Node</Button>
            </Link>
          </div>
        </div>
    </Arwes>
  )
}

export default JoinChat;