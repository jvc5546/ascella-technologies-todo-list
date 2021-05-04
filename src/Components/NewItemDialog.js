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

export default function NewItemDialog(props) {
  const classes = useStyles();
  const [itemTitle, setItemTitle] = useState("");
  const [itemTitleError, setItemTitleError] = useState(false);
  const [itemPriority, setItemPriority] = useState(0);
  const [itemNotes, setItemNotes] = useState("");

  const handleClose = () => {
    handleReset();
    props.setClose();
  };

  const handleAddNewItem = () => {

    if(!itemTitle || /^\s*$/.test(itemTitle)) {
      setItemTitleError(true);
    } else {
      let newItem = {
        title: itemTitle,
        priority: itemPriority,
        notes: itemNotes,
        completed: false
      }
      props.addItem(newItem)
      handleReset();
      props.setClose();
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

  const handleReset = () => {
    setItemTitle("");
    setItemTitleError(false);
    setItemPriority(0);
    setItemNotes("");
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new item, please enter the new item's information below. The item title is required, all other fields are optional.
          </DialogContentText>
          <TextField onChange={handleTitleChange}
            error={itemTitleError}
            autoComplete='off'
            autoFocus
            margin="dense"
            id="title"
            label="Item Title"
            type="title"
            fullWidth
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="prioritySelectLabel">Priority</InputLabel>
            <Select
              labelId="prioritySelectLabel"
              id="prioritySelect"
              defaultValue={0}
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
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ background: grey[500], color: "white"}} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleAddNewItem} style={{ background: green[500], color: "white"}} variant="contained">
            Add New Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
