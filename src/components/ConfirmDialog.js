import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import skull from '../images/skullfast.gif';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'black',
  },

}));

// Drop in component for confirmation actions
const ConfirmDialog = (props) => {

  const classes = useStyles();

  const { title, img, children, open, setOpen, onConfirm } = props;

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="Confirmation Dialog"
      >
        {/* inherits title and content as a prop from the parent component */}
        <DialogTitle id="confirm-dialog">{title}</DialogTitle>
        <img src={skull} alt="dissolving skull" />
        <DialogContent>
          
          {children}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
            style={{ display: 'inline-block', justifyContent: 'flex-start', fontSize: '200%' }}

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
            style={{ display: 'inline-block', justifyContent: 'flex-end', fontSize: '200%' }}

          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog