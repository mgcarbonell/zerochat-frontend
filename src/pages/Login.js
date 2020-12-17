import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import { 
  Button, 
  TextField,
  Typography,
  Grid,
  Paper 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import glitchednyc from '../images/glitchednyc.gif'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  terminal: {
    color: '#45C431'
  }

}));

const Login = props => {

  const classes = useStyles();

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
        props.storeUsername(data.username)
        props.storeBio(data.bio)
        console.log(data.user, data.username, data.bio)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/profile' />

  return (
    <div className={classes.root}>
      <img
        src={glitchednyc}
        style={{
          position: "absolute",
          marginTop: "63px",
          padding: "0",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
        alt={'cyberpunk New York highrise'}
      />
      <Paper style={{ backgroundColor: '#36454F', display: 'inline-block', marginTop: '20px', padding: '5px' }}>
        <Grid 
          container
          direction="column"
          alignItems="center"
          justify="center"  
        >
          <Typography variant="h2" style={{ color: '#D63AF9' }}>Welcome to Access Control</Typography>
          <Typography variant="h4" style={{ color: '#D63AF9' }}>Please Enter Your Credentials</Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField 
                onChange={ handleEmail }
                value={ email }
                type="email"
                id="email" 
                name="email"
                label="Email" 
                variant="filled" 
                required
                InputProps={{
                  className: classes.terminal
                }}
              />
            </div>

            <div className="form-group">
            <TextField
              onChange={ handlePassword }
              value={ password }
              type="password"
              id="password"
              name="password"
              label="password"
              variant="filled"
              required
              InputProps={{
                  className: classes.terminal
                }}
            />        
            </div>
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              style={{ marginLeft: '60px', marginTop: '10px'}}
            >
              login
            </Button>
          </form>
        </Grid>
      </Paper>  
    </div>
  )
}

export default Login;