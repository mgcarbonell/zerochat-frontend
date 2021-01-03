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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  credContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

}));


const Profile = (props) => {

  const classes = useStyles();

  let username = localStorage.getItem('username');
  let bio = localStorage.getItem('bio')

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
            <Grid className={classes.credContainer} item style={{ padding: 40, justifyContent: "center" }}>
              <Typography variant="h1" style={{ color: '#D63AF9' }}>
                Welcome Netrunner 
              </Typography>
              <Grid style={{ padding: 20 }}>
                <Card style={{ display: 'inline-block' }}>
                  <CardContent>
                    <Typography variant="h1">Credentials</Typography>
                    { formToggle ?
                    <>
                      <EditProfile
                        username={username}
                        bio={bio}
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
                  <CardActions style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center'}}>
                    <IconButton
                      aria-label="edit user" 
                      onClick={handleToggle}
                      style={{ fontSize: '200%' }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      aria-label="delete" 
                      onClick={() => setConfirmOpen(true)}
                      style={{ fontSize: '200%' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <ConfirmDialog
                        title="Have you been burned?"
                        open={confirmOpen}
                        setOpen={setConfirmOpen}
                        onConfirm={handleDelete}
                    >
                      <Typography variant="body" style={{ color: '#D63AF9' }}>
                        BURN USER
                      </Typography>
                    </ConfirmDialog>
                  </CardActions>
                </Card>
                <Grid >
                  <Button 
                    variant="contained" 
                    color="secondary"
                    style={{ width: '100%' }}
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