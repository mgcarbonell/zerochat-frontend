import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Toolbar,
  IconButton,
  Typography
 } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// display the room name, "online icon" and most importantly
// close icon

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    margin: 'auto',
    maxWidth: 800,
    width: '100%'
  },
  chatIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2
  },
  closeIcon: {
    flexDirection: "row-reverse",
    color: 'secondary'
  },
}));

const ChatInfoBar = ({ node }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h4" className={classes.title}>{ node }</Typography>
            <IconButton
              className={classes.closeIcon}
              variant="contained"
              aria-label="close"
              component={ Link } 
              to={'/join'}
            >
              <CloseIcon color="action"/>
            </IconButton>
          </Toolbar>
      </div>
  )
}

export default ChatInfoBar