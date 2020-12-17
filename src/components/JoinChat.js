import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Paper,
  Grid,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import glitchedtokyo from '../images/glitchedtokyo.gif'

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

const JoinChat = () => {

  const classes = useStyles();

  const [node, setNode] = useState('')
  
  let username = localStorage.getItem('username')

  return (
        <div className={classes.root}>
          <img
        src={glitchedtokyo}
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
          <Typography variant="h2" style={{ color: '#D63AF9' }}>Where do you wish to connect</Typography> 
          <Typography variant="h2" style={{ color: '#D63AF9' }}>to on cyberspace, {username}?</Typography>
          <div>
            <TextField
              style={{ marginTop: '10px', marginBottom: '5px' }} 
              placeholder="" 
              type="text" 
              onChange={(event) => setNode(event.target.value)}
              InputProps={{
                  className: classes.terminal
                }}
            />
          </div>
          <Link 
            onClick={event => !node ? event.preventDefault() : null} 
            to={`/chat?username=${username}&node=${node}`}>
            <Button
              style={{ marginTop: '10px' }} 
              variant="contained"
              color="warning"
            >
              connect to node
            </Button>
          </Link>
        </Grid>
      </Paper>
    </div>
  )
}

export default JoinChat;