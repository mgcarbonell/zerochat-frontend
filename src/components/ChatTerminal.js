import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from "socket.io-client";

const socket = io.connect(process.env.SOCKET_ENDPOINT)

const ChatTerminal = ({ location }) => {

  const [user, setUser] = useState('')
  const [room, setRoom] = useState('')
  
  useEffect(() => {
    const { user, node } = queryString.parse(location.search)
    console.log(user, node)
  })

  return (
    <div>
      I'm still a piece of garbage.
    </div>
  )
}

export default ChatTerminal;
