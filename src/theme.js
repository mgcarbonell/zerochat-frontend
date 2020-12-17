import { createMuiTheme } from '@material-ui/core';

const font = "'Share Tech Mono', mono-space"

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#47DAFF'
    },
    secondary:{
      main: '#F45B69'
    },
    background: {
      default: '#0C2731'
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  typography: {
    fontFamily: font,
  }
})

export default theme;