import React from 'react'
import {
  Typography
} from '@material-ui/core'


export default function CredentialsContainer(props) {
  
  let username = localStorage.getItem('username');

  return (
    <div>
      <Typography variant="h3">Username:</Typography>
      <Typography variant="body">
        { username }
      </Typography>
      <Typography variant="h3">Bio:</Typography>
      <Typography variant="body">
        user has not set a bio
      </Typography>
    </div>
  )
}
