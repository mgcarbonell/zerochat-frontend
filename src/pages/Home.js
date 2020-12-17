import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button
} from '@material-ui/core';
// import CodeVidGlitched01Short from '../video/CodeVidGlitched01Short.mp4'
import CodeVidGlitched01Long from '../video/CodeVidGlitched01Long.mp4'



const Home = () => {
  return (
    <div>
      <video autoPlay loop muted
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
      >
        <source src={CodeVidGlitched01Long} type="video/mp4" />
      </video>
      <Button variant="contained" color="primary">
        <Link to={'/register'}>Register</Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link to={'/login'}>Login</Link>
      </Button> 
    </div>
  );
}

export default Home;
