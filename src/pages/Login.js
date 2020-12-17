import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import { 
  Button, 
  TextField,
  Typography 
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


const Login = props => {
  // const classes = useStyles();

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
    <div>
      <Typography variant="h4">Login</Typography>
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
        />        
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
        >
          login
        </Button>
      </form>
    </div>
  )
}

export default Login;