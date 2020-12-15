import React, { useState } from 'react';
import Routes from './config/Routes';
import UserModel from './models/user';
import Navbar from './components/Navbar';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from 'arwes';

const myTheme = {
  color: {
    primary: {
      base: '#be26fc',
      dark: '#8e1bbd',
      light: '#c95bf6'
    },
    header: {
      base: '#fc26fa',
      dark: '#a818a7',
      light: '#f458f2'
    }
  }
};

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [

//     ].join(',')
//   }
// })

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem('username'));

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
    <ThemeProvider theme={createTheme(myTheme)}>
      <div className="App">
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
