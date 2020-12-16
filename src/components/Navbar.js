import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
              AppBar, 
              Toolbar, 
              IconButton, 
              MenuItem, 
              Menu,
              Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles';
// import logo from '../assets/an.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent', 
    boxShadow: 'none'
  },
  homeButton: {
    marginRight: '1rem',
  },
  profileButton: {
    marginLeft: '1rem'
  },
  newEntryButton: {
    marginRight: '1rem'
  },

}));

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  };
  

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 

        >
        <Toolbar>
            {/* <Link to={'/'}>
              <Tooltip title="Home">
                <Button className={classes.homeButton}>
                  <img src={logo} alt="cuneiform logo of the cuneiform symbol An" style={{ width: 36, height: 36 }}/>
                </Button>
              </Tooltip>
            </Link> */}
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
            <IconButton
              className={classes.profileButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              >
                <AccountCircle />
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={ Link } to={'/profile'} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem component={ Link } to={'/logout'} onClick={handleClose, props.logout}>
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;