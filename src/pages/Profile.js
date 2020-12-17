import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../models/user';
import EditCreds from '../components/EditCreds';
import CredentialsContainer from '../components/CredentialsContainer';
import ConfirmDialog from '../components/ConfirmDialog';
import { 
  Paper,
  Grid,
  IconButton,
  makeStyles,
  Typography
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
      <Typography variant="h1">Welcome Netrunner</Typography>
      <Typography variant="h3">Credentials</Typography>
      <Paper>
      { formToggle ?
      <>
        <EditCreds
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
      </Paper>

      <button>
        <Link to={ '/join' }>enter cyberspace</Link>
      </button>
    </div>
  );
};

export default Profile;