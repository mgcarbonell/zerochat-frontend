import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';
import CloseIcon from '@material-ui/icons/Close'

// display the room name, "online icon" and most importantly
// close icon

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    width: '100%'
  },
  roomIcon: {
    marginRight: '5%'
  },
  left: {
    flex: '0.5',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5%'
  },
  right: {
    flex: '0.5',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '5%'
  },
}));

const ChatInfoBar = ({ node }) => {
  const classes = useStyles();

  return (
      <div>
          <Toolbar className={classes.root}>
            <div className={classes.left}>
              <PublicIcon
                className={classes.roomIcon}
                color='primary' 
                style={{ fontSize: '200%' }}
              />
              <Typography 
                variant="h2"
                style={{ color: "#F7FBEF" }}
              >
                { node }
              </Typography>
            </div>
            <div className={classes.right}>
              <IconButton
                className={classes.closeIcon}
                variant="contained"
                aria-label="close"
                component={ Link } 
                to={'/join'}
              >
                <CloseIcon 
                  color="secondary"
                  style={{ fontSize: '150%' }}
                />
              </IconButton>
            </div>
          </Toolbar>
      </div>
  )
}

export default ChatInfoBar