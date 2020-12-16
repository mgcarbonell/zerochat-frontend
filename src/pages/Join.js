import React from 'react'
import Navbar from '../components/Navbar'
import JoinChat from '../components/JoinChat'

const Join = (props) => {

  return (
    <div>
      <Navbar
        currentUser={ props.currentUser }
        currentUsername = { props.currentUsername }
        logout = { props.logout }
      />
      <JoinChat />    
    </div>
  )
}

export default Join