import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { Typewriter } from 'react-typewriting-effect';


export default function CredentialsContainer(props) {
  
  let username = localStorage.getItem('username');

  return (
    <div>
      <Typography variant="h3">Username:</Typography>
      <Typography variant="body">
        <Typewriter 
          string={ username }
          delay={100}
        />
      </Typography>
      <Typography variant="h3">Bio:</Typography>
      <Typography variant="body">
        <Typewriter 
          string="user has not set a bio"
          delay={100}
        />
      </Typography>
    </div>
  )
}
