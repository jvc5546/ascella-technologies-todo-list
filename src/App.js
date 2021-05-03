import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from './Components/AppBar';
import NewTaskModal from './Components/NewTaskModal'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const classes = useStyles();

  const handleOpenNewTaskModal = () => {
    setOpenNewTaskModal(true);
  }

  const handleCloseNewTaskModal = () => {
    setOpenNewTaskModal(false);
  }
  return (
    <div className="App">
      <AppBar/>
      {taskList.size > 0
        ? <div>Hello</div>
        : <div>There are currently no items on the TODO list.</div>
      }
      <Button onClick={handleOpenNewTaskModal}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddBoxOutlinedIcon />}
      >
        Add New Task
      </Button>
      <NewTaskModal open={openNewTaskModal} setClose={handleCloseNewTaskModal}/>
    </div>
  );
}

export default App;
