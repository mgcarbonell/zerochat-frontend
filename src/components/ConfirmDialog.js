import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import skull from '../images/skullfast.gif';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    background: '#000000',
  },

}));

// Drop in component for confirmation actions
const ConfirmDialog = (props) => {

  const classes = useStyles();

  const { title, children, open, setOpen, onConfirm } = props;

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="Confirmation Dialog"
      >
        {/* inherits title and content as a prop from the parent component */}
        <DialogTitle id="confirm-dialog" style={{ backgroundColor: '#000000' }}>
          <Typography variant="h4" style={{ color: '#primary' }}>{title}</Typography>
          </DialogTitle>
        <img src={skull} alt="dissolving skull" />
        <DialogContent style={{ backgroundColor: '#000000', textAlign: 'center' }}>
          {children}
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#000000', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
            style={{ fontSize: '100%', margin: '10px' }}
          >
            NO
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
            color="secondary"
            style={{ fontSize: '100%', margin: '10px' }}
          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog