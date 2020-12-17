import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../models/user';
import EditProfile from '../components/EditProfile';
import CredentialsContainer from '../components/CredentialsContainer';
import ConfirmDialog from '../components/ConfirmDialog';
import { 
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const Profile = (props) => {

  let username = localStorage.getItem('username');

  const [formToggle, setFormToggle] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);


  const handleToggle = () => {
    setFormToggle(true)
  };

  const handleDelete = () => {
    UserModel.delete(props.currentUser)
    .then(
      props.history.push('/')
      )
      .then(localStorage.clear())
  };

  return (
    <div>
      <Grid>
        <Grid item xs={12}>

          <Typography variant="h1">Welcome</Typography>
          <Typography variant="h3">Credentials</Typography>
        
          <Grid>
            <Card style={{ display: 'inline-block' }}>
              <CardContent>
                { formToggle ?
                <>
                  <EditProfile
                    username={username}
                    // bio={}
                    formToggle={formToggle}
                    setFormToggle={setFormToggle}
                  />
                </>  
                :
                <>
                  <CredentialsContainer
                    username={username}
                    // bio={}
                  />
                </>
                }
              </CardContent>
              <CardActions>
                <IconButton onClick={handleToggle}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
                  <DeleteIcon />
                </IconButton>
                <ConfirmDialog
                    title="Have you been burned?"
                    open={confirmOpen}
                    setOpen={setConfirmOpen}
                    onConfirm={handleDelete}
                >
                  burn user
                </ConfirmDialog>
              </CardActions>
            </Card>
            <Button 
              variant="contained" 
              color="secondary"
              style={{ display: 'inline-block' }}
            >
              <Link to={ '/join' }>enter cyberspace</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;