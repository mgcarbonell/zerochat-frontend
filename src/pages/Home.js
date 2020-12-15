import React from 'react';
import { Link } from 'react-router-dom';
// import CodeVidGlitched01Short from '../video/CodeVidGlitched01Short.mp4'
import CodeVidGlitched01Long from '../video/CodeVidGlitched01Long.mp4'

const Home = (props) => {
  return (
    <div>
      <h1>Welcome to PERN Auth</h1>
      <video autoPlay loop muted
        style={{
          position: "absolute",
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
      <div className="links">
        <ul>
          <li><Link to={'/register'}>Register</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Home;
