import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: theme.typography.fontWeightBold,
  },
  button: {
    textAlign: 'center',
    margin: theme.spacing(2, 1),
  }
}));

export default function Item (props) {
  const classes = useStyles();
  const getPriorityColor = () => {
    if (props.priority <= 2) {
        return 'disabled';
    } else if (props.priority === 3) {
      return 'secondary';
    }
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
          {props.priority >= 1 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
          {props.priority >= 2 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
          {props.priority === 3 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography>
                {props.notes.length === 0
                ? <div>No notes available for this item</div>
                : <div>{props.notes}</div>
                }
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" variant="contained" className={classes.button} style={{ background: "#d50000" }} size="large">
                Delete Item
              </Button>
              <Button color="primary" variant="contained" className={classes.button} size="large">
                Edit Item
              </Button>
              <Button color="primary" variant="contained" className={classes.button} style={{ background: green[500] }} size="large">
                Complete
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}