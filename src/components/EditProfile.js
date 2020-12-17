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

  const { setFormToggle } = props

  const handleSubmit = (event) => {
    event.preventDefault();
    UserModel.update({ username, email, bio })
    .then(() => {
      setFormToggle(false)
    });
  };

  const handleClose = () => {
    setFormToggle(false)
  }


  return (
    <div style={{ padding: 20 }}>
      <IconButton
        onClick={() => handleClose()}
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
            rows={3}
            onInput={event => setBio(event.target.value)}
          />
        </Grid>
        <Button
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  )
}
