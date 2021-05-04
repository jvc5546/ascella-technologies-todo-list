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
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1, 0)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewItemDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setClose();
  };

  const handleDeleteItem = () => {
    props.deleteItem(props.index);
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="delete-item-dialog-title">
        <DialogTitle id="delete-item-dialog-title">Delete Item Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete the following item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[500], color: "white"}} variant="contained">
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
