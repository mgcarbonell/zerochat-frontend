import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditCreds from '../components/EditCreds';
import CredentialsContainer from '../components/CredentialsContainer';
import { 
        Card,
        Grid,
        IconButton,
        makeStyles
                    } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UserModel from '../models/user';
import ConfirmDialog from '../components/ConfirmDialog';



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
  }

  return (
    <div>
      <h1>Welcome Netrunner</h1>
      <h3>Credentials</h3>
      <Card>
      { formToggle ?
      <>
        <EditCreds
          username={username}
          // bio={}
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
            Burn user
          </ConfirmDialog>
      </Card>

      <button>
        <Link to={ '/join' }>Enter Cyberspace</Link>
      </button>
      <button>

      </button>
    </div>
  );
};

export default Profile;