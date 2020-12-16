import React, { useState } from 'react';
import UserModel from '../models/user';
import { 
  Button, 
  Grid, 
  Paper, 
  TextField,
  IconButton 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

export default function EditCreds(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    UserModel.update({ 
      username: username, 
      email: email,
      bio: bio
    }).then(data => {
      props.setFormToggle(false)
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <IconButton
        onClick={event => props.setFormToggle(false)}
      >
        <CloseIcon />
      </IconButton>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"      
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            id='outlined-basic'
            label='username'
            type='text'
            value={username}
            onInput={event => setUsername(event.target.value)}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            id='outlined-basic'
            label='email'
            type='text'
            value={email}
            onInput={event => setEmail(event.target.value)}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            id='outlined-basic'
            label='bio'
            type='text'
            value={bio}
            onInput={event => setBio(event.target.value)}
          />
        </Grid>
        <Button
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
