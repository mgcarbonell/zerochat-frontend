import React from 'react';

const ConnectedUsers = ({ users }) => (
  <div>
    {
      users
      ? (
        <div>
          <h2>
            {users.map(({ username }) => (
              <div key={ username }>
                { username }
              </div>
            ))}
          </h2>
        </div>
      )
      : null
    }
  </div>

)


export default ConnectedUsers
