import React from 'react';
import { Link } from 'react-router-dom';
// import CodeVidGlitched01Short from '../video/CodeVidGlitched01Short.mp4'
import CodeVidGlitched01Long from '../video/CodeVidGlitched01Long.mp4'



const Home = (props) => {
  return (
    <div>
      <video autoPlay loop muted
        style={{
          position: "absolute",
          marginTop: "-1px",
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
        <button>
                <Link to={'/register'}>Register</Link>
              </button>

              <button>
                <Link to={'/login'}>Login</Link>
              </button> 
    </div>
  );
}

export default Home;
