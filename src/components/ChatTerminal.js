import React from 'react'
import io from "socket.io-client";

const socket = io.connect(process.env.SOCKET_ENDPOINT)

export default function ChatTerminal() {
  return (
    <div>
      I'm still a piece of garbage.
    </div>
  )
}
