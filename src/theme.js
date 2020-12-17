import { createMuiTheme } from '@material-ui/core';

const font = "'Share Tech Mono', mono-space"

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#47DAFF'
    },
    secondary:{
      main: '#D63AF9'
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
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        background: {
          default: '#36454F'
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  typography: {
    fontFamily: font,
    fontSize: '16px'
  }
})

export default theme;