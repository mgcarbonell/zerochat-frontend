import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

const Profile = (props) => {

  // const [formToggle, setFormToggle] = useState(false);
  

  // useEffect(() => {
  //   EditProfileModel.show
  // })
  let username = localStorage.getItem('username')

  return (
    <div>
      <Navbar />
      <h1>Profile of { username }</h1>
    </div>
  )
}

export default Profile