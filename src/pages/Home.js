import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  Paper,
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
      <div style={{ marginTop: 50, padding: 40}}>
        <Grid container spacing={40} justify="center">
          <Paper style={{ backgroundColor: 'black' }}>
            
            <Button variant="contained" color="primary" style={{ marginTop: 30, marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
              <Link to={'/register'}>Register</Link>
            </Button>

            <Button variant="contained" color="primary" style={{ marginTop: 30, marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
              <Link to={'/login'}>Login</Link>
            </Button> 
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
