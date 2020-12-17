import React, { useState } from 'react';
import Routes from './config/Routes';
import UserModel from './models/user';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem('username'));
  const [bio, setBio] = useState()
  
  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser( userId )
  }

  const storeUsername = (username) => {
    localStorage.setItem('username', username)
    setCurrentUsername( username )
    console.log(username)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')
    localStorage.removeItem('username')


    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar
          currentUser={ currentUser }
          currentUsername = { currentUsername }
          logout = { logout }
        />
        <Routes 
          currentUser={ currentUser }
          currentUsername={ currentUsername }
          storeUser={ storeUser }
          storeUsername={ storeUsername }
        />
      </div>
    </ThemeProvider>
  );
}

export default App 
