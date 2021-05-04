import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from './Components/AppBar';
import NewItemDialog from './Components/NewItemDialog';
import DeleteItemDialog from './Components/DeleteItemDialog';
import Item from './Components/Item';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [updateItemIndex, setUpdateItemIndex] = useState(null);
  const classes = useStyles();

  const handleOpenNewItemModal = () => {
    setOpenNewItemModal(true);
  }

  const handleCloseNewItemModal = () => {
    setOpenNewItemModal(false);
  }

  const handleOpenDeleteItemModal = (index) => {
    setUpdateItemIndex(index);
    setOpenDeleteItemModal(true);
  }

  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  }


  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  const handleAddItem = (item) => {
    let newList = [...itemList];
    newList.push(item);
    setItemList(newList);
  }

  const handleDeleteItem = () => {
    let newList = [...itemList];
    newList.splice(updateItemIndex, 1);
    setExpanded(false);
    setUpdateItemIndex(null);
    setOpenDeleteItemModal(false);
    setItemList(newList);
  }

  return (
    <div className="App">
      <AppBar/>
      {itemList.length === 0
        ? <div>There are currently no items on the TODO list.</div>
        : itemList.map((item, index) => <Item key={index} index={index} title={item.title} priority={item.priority} notes={item.notes} handlePanelChange={handlePanelChange} expanded={expanded} handleOpenDeleteModal={handleOpenDeleteItemModal}/>)
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
      <DeleteItemDialog open={openDeleteItemModal} setClose={handleCloseDeleteItemModal} deleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
