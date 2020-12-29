import React from 'react';
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   marginLeft: '100px',
  //   height: '60%',
  //   justifyContent: 'space-between',
  //   color: '#7CB518'
  // },
  users: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50%'
  },
  display: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const ConnectedUsers = ({ users }) => {

  const classes = useStyles();

  return (
    <div>
      {
        users
        ? (
          <div className={classes.users}>
            <Typography variant="h4">
              {users.map(({ username }) => (
                <div key={ username } className={classes.display}>
                  { username }
                </div>
              ))}
            </Typography>
          </div>
        )
        : null
      }
    </div>
  )
}


export default ConnectedUsers
