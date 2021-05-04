import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import DeleteItemDialog from './DeleteItemDialog';
import EditItemDialog from './EditItemDialog';
import CompleteItemDialog from './CompleteItemDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    [theme.breakpoints.up('md')]: {fontSize: 48},
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')] : {width: 200}
  },
  alertIconts:{
    [theme.breakpoints.up('md')]: {fontSize: 48}
  },
  button: {
    textAlign: 'center',
    margin: theme.spacing(2, 1),
  }
}));

export default function Item (props) {
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [openEditItemModal, setOpenEditItemModal] = useState(false);
  const [openCompleteItemModal, setOpenCompleteItemModal] = useState(false);

  const classes = useStyles();

  const getPriorityColor = () => {
    if(props.priority <=1) {
      return grey[500];
    } else if (props.priority <= 2) {
        return "#212121";
    } else if (props.priority === 3) {
      // return 'secondary';
      return "#d50000";
    }
  }

  const handleDeleteConfirmation = () => {
    props.handleDelete(props.index);
    handleCloseDeleteItemModal();
  }

  const handleOpenDeleteItemModal = () => {
    setOpenDeleteItemModal(true);
  }

  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  }

  const handleEditConfirmation = (editedItem) => {
    props.handleEditItem(props.index, editedItem);
  }

  const handleOpenEditItemModal = () => {
    setOpenEditItemModal(true);
  }
  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  }

  const handleCompleteItemConfirmation = (completeItem) => {
    if(completeItem && !props.completed) {
      props.handleCompleteItem(props.index, true);
    } else if (!completeItem && props.completed) {
      props.handleCompleteItem(props.index, false);
    }
  }

  const handleOpenCompleteItemModal = () => {
    setOpenCompleteItemModal(true);
  }

  const handleCloseCompleteItemModal = () => {
    setOpenCompleteItemModal(false);
  }

  return (
    <div>
      <Accordion expanded={props.expanded === `item${props.index}`} onChange={props.handlePanelChange(`item${props.index}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large"/>}
          aria-controls={`item${props.index}-content`}
          id={`item${props.index}-header"`}
        >
          <Typography className={classes.heading} noWrap style={{ textDecoration : props.completed ? 'line-through' : 'none' }} >{props.title}</Typography>
          {(props.priority >= 1 && !props.completed) && <PriorityHighIcon style={{color: getPriorityColor()}} className={classes.alertIconts}/>}
          {(props.priority >= 2 && !props.completed) && <PriorityHighIcon style={{color: getPriorityColor()}} className={classes.alertIconts}/>}
          {(props.priority === 3 && !props.completed) && <PriorityHighIcon style={{color: getPriorityColor()}} className={classes.alertIconts}/>}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography style={{wordWrap: "break-word"}}>
                {props.notes.length === 0
                ? <i>No notes available for this item</i>
                : <i>{props.notes}</i>
                }
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" variant="contained" className={classes.button} style={{ background: "#d50000" }} size="large" onClick={handleOpenDeleteItemModal}>
                Delete Item
              </Button>
              <Button color="primary" variant="contained" className={classes.button} size="large" onClick={handleOpenEditItemModal}>
                Edit Item
              </Button>
              <Button color="primary" variant="contained" className={classes.button} style={{ background: green[500] }} size="large" onClick={handleOpenCompleteItemModal}>
                {props.completed ? "Undo Item" : "Complete"}
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <DeleteItemDialog open={openDeleteItemModal} setClose={handleCloseDeleteItemModal} handleDeleteConfirmation={handleDeleteConfirmation} title={props.title}/>
      <EditItemDialog open={openEditItemModal} setClose={handleCloseEditItemModal} handleEditConfirmation={handleEditConfirmation} title={props.title} notes={props.notes} priority={props.priority}/>
      <CompleteItemDialog open={openCompleteItemModal} setClose={handleCloseCompleteItemModal} handleCompleteItemConfirmation={handleCompleteItemConfirmation} title={props.title} completed={props.completed}/>
    </div>
  )
}