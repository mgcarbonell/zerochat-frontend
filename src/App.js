import React, { useState } from 'react';
import Routes from './config/Routes';
import UserModel from './models/user';
import Navbar from './components/Navbar';


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
        <div>
          <Routes 
            currentUser={ currentUser }
            currentUsername={ currentUsername }
            storeUser={ storeUser }
            storeUsername={ storeUsername }
          />
        </div>
  );
}

export default App 
