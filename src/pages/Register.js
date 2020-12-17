import React, { useState } from 'react';
import UserModel from '../models/user';
import { 
  Button, 
  TextField,
  Typography ,
  Grid,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import trainstation from '../images/trainstation.gif'


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

const Register = props => {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value)
  };

  const handleEmail = e => {
    setEmail(e.target.value)
  };

  const handlePassword = e => {
    setPassword(e.target.value)
  };

  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  };

  const handleBio = e => {
    setBio(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confirmPassword) {
      UserModel.create({ email, username, password, bio })
        .then(data => {
          console.log('Successful register', data);
          // redirect to /login
          props.history.push('/profile');
        });
    };
  };
  

  return (
    <div className={classes.root}>
      <img
        src={trainstation}
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
        alt={'cyberpunk hong kong'}
      />
      <Paper style={{ backgroundColor: '#36454F', marginTop: '20px', padding: '5px' }}>
        <Grid 
          container
          direction="column"
          alignItems="center"
          justify="center"  
        >
          <Typography variant="h2" style={{ color: '#D63AF9' }}>Welcome to Access Control</Typography>
          <Typography variant="h4" style={{ color: '#D63AF9' }}>Create Your Credentials</Typography>
          <form noValidate autoComplete="off" onSubmit={ handleSubmit }>
            <div className="form-group">
              <TextField 
                onChange={ handleUsername } 
                value={ username }
                InputProps={{
                  className: classes.terminal
                }}
                type="text" 
                id="username" 
                name="username" 
                label="username"
                variant="filled"
                required
              />
            </div>
            <div className="form-group">
              <TextField 
                onChange={ handleEmail } 
                value={ email } 
                type="email" 
                id="email" 
                name="email" 
                label="email"
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
            <div className="form-group">
              <TextField
                onChange={ handleConfirmPassword } 
                value={ confirmPassword } 
                type="password" 
                id="confirm-password" 
                name="confirm-password" 
                label="confirm your password"
                variant="filled"
                required
                InputProps={{
                  className: classes.terminal
                }}
              />
            </div>
            <div className="form-group">
              <TextField 
                onChange={ handleBio } 
                value={ bio }
                type="text" 
                id="bio" 
                name="bio" 
                label="bio"
                variant="filled"
                rows={3}
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
              style={{ marginTop: '10px', marginLeft: '60px'}}
            >
              register
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;