import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  itemTitle: {
    fontWeight: "bold"
  }
}));

export default function DeleteItemDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setClose();
  };

  const handleDeleteItem = () => {
    props.handleDeleteConfirmation();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="delete-item-dialog-title">
        <DialogTitle id="delete-item-dialog-title">Delete Item Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete the following item?
          </DialogContentText>
          <DialogContentText className={classes.itemTitle}>
            {props.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[700], color: "white"}} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleDeleteItem} style={{ background: "#d50000", color: "white"}} variant="contained">
            Delete Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
