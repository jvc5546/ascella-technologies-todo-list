import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function NewItemDialog(props) {
  const handleClose = () => {
    props.setClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new item, please enter the new item's information below. The item title is required, all other fields are optional.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Item Title"
            type="title"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="priority"
            label="Item Priority"
            type="priority"
            fullWidth
          />
          <TextField
            id="notes"
            label="Item Notes"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Add New Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
