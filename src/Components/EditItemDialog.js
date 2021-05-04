import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1, 0)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EditItemDialog(props) {
  const classes = useStyles();
  const [itemTitle, setItemTitle] = useState("");
  const [itemTitleError, setItemTitleError] = useState(false);
  const [itemPriority, setItemPriority] = useState(0);
  const [itemNotes, setItemNotes] = useState("");

  const handleOnEnter = () => {
    setItemTitle(props.title);
    setItemNotes(props.notes)
    setItemPriority(props.priority);
  }

  const handleClose = () => {
    props.setClose();
  };

  const handleEditItem = () => {

    if(!itemTitle || /^\s*$/.test(itemTitle)) {
      setItemTitleError(true);
    } else {
      props.handleEditConfirmation(itemTitle, itemPriority, itemNotes);
      handleClose();
    }
  }

  const handleTitleChange = (e) => {
    setItemTitle(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setItemPriority(e.target.value);
  }

  const handleNotesChange = (e) => {
    setItemNotes(e.target.value);
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="edit-item-dialog-title" onEnter={handleOnEnter}>
        <DialogTitle id="edit-item-dialog-title">Edit Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit an item, please edit the item's information below. The item title is required, all other fields are optional.
          </DialogContentText>
          <TextField onChange={handleTitleChange}
            error={itemTitleError}
            autoComplete='off'
            autoFocus
            margin="dense"
            id="title"
            label="Item Title"
            type="title"
            value={itemTitle}
            fullWidth
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="prioritySelectLabel">Priority</InputLabel>
            <Select
              labelId="prioritySelectLabel"
              id="prioritySelect"
              value={itemPriority}
              onChange={handlePriorityChange}
              label="Priority"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
          <TextField onChange={handleNotesChange}
            autoComplete='off'
            id="notes"
            label="Item Notes"
            multiline
            rows={4}
            value={itemNotes}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[500], color: "white"}} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleEditItem} style={{ background: green[500], color: "white"}} variant="contained">
            Edit Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
