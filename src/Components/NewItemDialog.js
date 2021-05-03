import React from 'react';
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="prioritySelectLabel">Priority</InputLabel>
            <Select
              labelId="prioritySelectLabel"
              id="prioritySelect"
              // value={age}
              // onChange={handleChange}
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
