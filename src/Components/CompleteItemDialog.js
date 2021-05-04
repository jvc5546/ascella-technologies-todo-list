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

export default function CompleteItemDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setClose();
  };

  const handleCompleteItem = () => {
    props.handleCompleteItemConfirmation(true);
    handleClose();
  }

  const handleUndoItem = () => {
    props.handleCompleteItemConfirmation(false);
    handleClose();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="complete-item-dialog-title">
        <DialogTitle id="complete-item-dialog-title">{props.completed ? "Undo Item Confirmation" : "Complete Item Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.completed
            ? "Are you sure you want to undo this item's completion?"
            : "Are you sure you want to complete the following item?"}
          </DialogContentText>
          <DialogContentText className={classes.itemTitle}>
            {props.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[700], color: "white"}} variant="contained">
            Cancel
          </Button>
          {props.completed && <Button onClick={handleUndoItem} style={{ background: "#d50000", color: "white"}} variant="contained">
            Undo Item
          </Button>}
          {!props.completed && <Button onClick={handleCompleteItem} style={{ background: "#d50000", color: "white"}} variant="contained">
            Complete Item
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
