import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  MenuItem, 
  Menu,
  Grid 
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/zerochatglitchedlogo.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent', 
    boxShadow: 'none'
  },
  profileButton: {
    marginLeft: '1rem'
  },
  newEntryButton: {
    marginRight: '1rem'
  },
  img: {
    maxWidth: '65px',
  }

}));

const Navbar = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(false);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(false)
  };

  useEffect(() => {
    setAnchorEl(false)
    return () => {
      handleClose()
    }
  }, [])
  

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        style = {{ backgroundColor: "black" }}
        >
        <Toolbar>
          <img className={classes.img} src={logo} alt="zerochat logo" />
          <Grid
            component="label"
            container
            alignItems="center"
            spacing={2}
          >
          </Grid>
          <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="center"
          >
            { props.currentUser ? 
              <>
                <IconButton
                  className={classes.profileButton}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="secondary"
                  fontSize="large"
                  >
                    <AccountCircle 
                      color='secondary' 
                      style={{ fontSize: '300%' }}  
                    />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    horizontal: 'right'
                  }}
                  open={anchorEl}
                  onClose={handleClose}
                >
                  <MenuItem component={ Link } to={'/profile'} onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem component={ Link } to={'/logout'} onClick={handleClose, props.logout}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            :
              <>

              </>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;