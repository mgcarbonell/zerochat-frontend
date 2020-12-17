import React from 'react'
import {
  Typography,
  Paper
} from '@material-ui/core'

export default function CredentialsContainer(props) {
  
  let username = localStorage.getItem('username');

  return (
    <Paper style = {{ display: 'inline-block' }}>
      <Typography variant="h4">Username:</Typography>
      <Typography variant="body">{ username }</Typography>
      <Typography variant="h4">Bio:</Typography>
      <Typography variant="body">bio filled here</Typography>
    </Paper>
  )
}
