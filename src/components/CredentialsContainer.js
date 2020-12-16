import React from 'react'

export default function CredentialsContainer(props) {
  
  let username = localStorage.getItem('username');

  return (
    <div>
      <h4>Username:</h4>
      <p>{ username }</p>
      <h4>Bio:</h4>
      <p>bio filled here</p>
    </div>
  )
}
