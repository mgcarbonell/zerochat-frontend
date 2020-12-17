import React from 'react';
import {
  Typography
} from '@material-ui/core'

const ConnectedUsers = ({ users }) => (
  <div>
    {
      users
      ? (
        <div>
          <Typography variant="h4">
            {users.map(({ username }) => (
              <div key={ username }>
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


export default ConnectedUsers
