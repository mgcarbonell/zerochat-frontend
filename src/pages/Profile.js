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
  Button,
  Paper
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Barcode from 'react-barcode'
import glitchedhongkong from '../images/glitchedhongkong.gif'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

}));


const Profile = (props) => {

  const classes = useStyles();

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
    <div className={classes.root}>
      <img
        src={glitchedhongkong}
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
            <Grid item style={{ padding: 40, justifyContent: "center" }}>
              <Typography variant="h1" style={{ color: '#D63AF9' }}>
                Welcome Netrunner 
              </Typography>
              <Grid justify="center" style={{ padding: 20 }}>
                <Card justify="center" style={{ display: 'inline-block'}}>
                  <CardContent>
                    <Typography variant="h1">Credentials</Typography>
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
                    <Barcode value = {username} />
                  </CardContent>
                  <CardActions style={{ justifyContent: 'space-between' }}>
                    <IconButton
                      aria-label="edit user" 
                      onClick={handleToggle}
                      style={{ display: 'inline-block', justifyContent: 'flex-start', fontSize: '200%' }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="delete" 
                      style={{ display: 'inline-block', justifyContent: 'flex-end', fontSize: '200%' }}
                      onClick={() => setConfirmOpen(true)}
                    >
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
                <Grid>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    style={{ marginLeft: '40px'}}
                  >
                    <Link to={ '/join' }>enter cyberspace</Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>   
    </div>
  );
};

export default Profile;