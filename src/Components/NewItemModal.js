import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    float: 'right',
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1)
  }
}));

export default function NewItemModal(props) {
  const classes = useStyles();

  const handleNewItem = () => {
    //declare newItem object
    //Pull input values into object
    //Pass object into the App's state
    //Close modal
    props.setClose();
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.setClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">New Item</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <Button onClick={handleNewItem}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          >
            Add Item
          </Button>
          <Button onClick={props.setClose}
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
