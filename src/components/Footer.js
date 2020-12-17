import React from 'react';
import { Grid } from '@material-ui/core'

const style = {
  backgroundColor: "#52575F",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%",
}

const fixed = {
display: 'block',
padding: '20px',
height: '50px',
width: '100%',
}

function Footer({ children }) {



  return (
      <div>
        <div style={fixed} />
          <div style={style}>
            <Grid item>
            </Grid>
          </div>
      </div>
  )
}

export default Footer;
