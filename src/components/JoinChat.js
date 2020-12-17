import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography
} from '@material-ui/core'

// use puffs
const JoinChat = () => {

  
  const [node, setNode] = useState('')
  
  let username = localStorage.getItem('username')

  return (
        <div>
          <div>
            <Typography variant="h2">Where do you wish to connect on cyberspace?</h2>
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
              <button animate>connect to node</button>
            </Link>
          </div>
        </div>
  )
}

export default JoinChat;