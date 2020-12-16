import React, { useState } from 'react';
import UserModel from '../models/user';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

export default function EditCreds(props) {

  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')

  
  const handleSubmit = (event) => {
    event.preventDefault();
    UserModel.update({ username, bio })
    .then(data => {
      props.setFormToggle(false)
    })
  };

  return (
    <div style={{ padding: 20 }}>
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
