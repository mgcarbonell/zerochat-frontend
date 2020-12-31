import { createMuiTheme } from '@material-ui/core';

const font = "'Share Tech Mono', mono-space"

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#47DAFF',
      contrastText: '#000'
    },
    secondary:{
      main: '#D63AF9',
      contrastText: '#000'
    },
    error:{
      main: '#F25476'
    },
    warning:{
      main: '#FFD400'
    },
    info:{
      main: '#E5E1DC'
    },
    success:{
      main: '#45C431'
    },
    background:{
      default: '#36454F'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
  },
  typography: {
    fontFamily: font,
    fontSize: '16px',
  }
})

export default theme;