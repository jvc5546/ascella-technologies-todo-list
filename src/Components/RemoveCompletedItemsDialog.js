import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { grey } from '@material-ui/core/colors';

export default function RemoveCompletedItemsDialog(props) {

  const handleClose = () => {
    props.setClose();
  };

  const handleRemoveCompleted = () => {
    props.handleRemoveCompletedConfirmation();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="remove-completed-dialog-title">
        <DialogTitle id="remove-completed-dialog-title">Remove Completed Items Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently remove all the completed items?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[700], color: "white"}} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleRemoveCompleted} style={{ background: "#d50000", color: "white"}} variant="contained">
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
