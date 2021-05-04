import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: theme.typography.fontWeightBold,
  },
  details: {
    textAlign: 'center'
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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
          {props.priority >= 1 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
          {props.priority >= 2 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
          {props.priority === 3 && <PriorityHighIcon color={getPriorityColor()} fontSize="large"/>}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.notes.length === 0
            ? <div>No notes available for this item</div>
            : props.notes
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}