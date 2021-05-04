import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from './Components/AppBar';
import NewItemDialog from './Components/NewItemDialog';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [itemList, setItemList] = useState([]);
  const classes = useStyles();

  const handleOpenNewItemModal = () => {
    setOpenNewItemModal(true);
  }

  const handleCloseNewItemModal = () => {
    setOpenNewItemModal(false);
  }

  const handleAddItem = (item) => {
    let newList = [...itemList];
    newList.push(item);
    setItemList(newList);
  }
  return (
    <div className="App">
      <AppBar/>
      {itemList.size > 0
        ? <div>Hello</div>
        : <div>There are currently no items on the TODO list.</div>
      }
      <Button onClick={handleOpenNewItemModal}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddBoxOutlinedIcon />}
      >
        Add New Item
      </Button>
      <NewItemDialog open={openNewItemModal} setClose={handleCloseNewItemModal} addItem={handleAddItem}/>
    </div>
  );
}

export default App;
