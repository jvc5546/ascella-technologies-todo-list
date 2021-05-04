import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from './Components/AppBar';
import NewItemDialog from './Components/NewItemDialog';
import Item from './Components/Item';
import RemoveCompletedItemsDialog from './Components/RemoveCompletedItemsDialog';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [openRemoveCompletedModal, setOpenRemoveCompletedModal] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleOpenNewItemModal = () => {
    setOpenNewItemModal(true);
  }

  const handleCloseNewItemModal = () => {
    setOpenNewItemModal(false);
  }

  const handleOpenRemoveCompletedModal = () => {
    setOpenRemoveCompletedModal(true);
  }


  const handleCloseRemoveCompletedModal = () => {
    setOpenRemoveCompletedModal(false);
  }

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  const handleAddItem = (item) => {
    let newList = [...itemList];
    newList.push(item);
    setItemList(newList);
  }

  const handleDeleteItem = (index) => {
    let newList = [...itemList];
    newList.splice(index, 1);
    setExpanded(false);
    setItemList(newList);
  }

  const handleEditItem = (index, editedItem) => {
    let newList = [...itemList];
    newList[index] = editedItem;
    setItemList(newList);
    setExpanded(false);
  }

  const handleCompleteItem = (index, completeItem) => {
    let newList = [...itemList];
    newList[index].completed = completeItem;
    setItemList(newList);
    setExpanded(false);
  }

  const handleRemoveCompletedConfirmation = () => {
    let newList = itemList.filter((item) => !item.completed);
    setItemList(newList);
    handleCloseRemoveCompletedModal();
    setExpanded(false);
  }

  return (
    <div className="App">
      <AppBar/>
      {itemList.length === 0
        ? <div>There are currently no items on the TODO list.</div>
        : itemList.map((item, index) => <Item key={index} index={index} title={item.title} priority={item.priority} notes={item.notes} completed={item.completed} handlePanelChange={handlePanelChange} expanded={expanded} handleDelete={handleDeleteItem} handleEditItem={handleEditItem} handleCompleteItem={handleCompleteItem}/>)
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
      <Button onClick={handleOpenRemoveCompletedModal}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddBoxOutlinedIcon />}
        disabled={itemList.filter((item) => item.completed).length <= 0}
        style={{ background: (itemList.filter((item) => item.completed).length <= 0) ? grey[500] : "#d50000"}}
      >
        Remove Completed Items
      </Button>
      <NewItemDialog open={openNewItemModal} setClose={handleCloseNewItemModal} addItem={handleAddItem}/>
      <RemoveCompletedItemsDialog open={openRemoveCompletedModal} setClose={handleCloseRemoveCompletedModal} handleRemoveCompletedConfirmation={handleRemoveCompletedConfirmation}/>
    </div>
  );
}

export default App;
