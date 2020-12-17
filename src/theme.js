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
    MuiCssBaseline: {
      '@body': {
        backgroundColor: '#36454F'
        }
      },
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiAppBar: {
      color: 'black'
    }
  },
  typography: {
    fontFamily: font,
    fontSize: '16px',
  }
})

export default theme;