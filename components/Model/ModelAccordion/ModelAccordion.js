import React from 'react';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as _ from 'lodash';
import * as moment from 'moment';
import Calendar from '../../Calendar';

export default function ModelAccordion({ costumes }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component='div' className={classes.root}>

      {_.map(costumes, (c, i) => (
        c?.size && (
          <Accordion
            key={c.id}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={expanded === `panel${i}` ? classes.focus : ''}
            >
              <Typography className={classes.heading}>
                {c.size.rozmiar}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {c.size.opis}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.accordionDetails}>
              <Typography className={classes.reservationsText}>Aktualne Rezerwacje</Typography>
              <Calendar
                selectedDays={
                  _.map(c.reservations, r => {
                    if (moment(r.rezerwacja_od).isBefore(moment().subtract(2, 'days'))) return {};
                    return {
                      after: new Date(moment(r.rezerwacja_od).subtract(1, 'day')),
                      before: new Date(moment(r.rezerwacja_do).add(1, 'day'))
                    }
                  })
                }
                className={classes.calendar}
              />
              <Typography className={classes.accordionKOD} paragraph>Podaj KOD produktu: <span>{c.id}</span></Typography>
            </AccordionDetails>
          </Accordion>
        )
      ))}

    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 1
  },
  accordion: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none'
    // padding: '.1rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    minWidth: '3rem',
    marginRight: theme.spacing(2),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  calendar: {
    // border: `1px solid ${theme.palette.common.secondary.main}`
    boxShadow: `0 0 10px -7px ${theme.palette.common.secondary.main}`
  },
  accordionDetails: {
    flexDirection: 'column',
  },
  accordionKOD: {
    fontWeight: 'bold',
    '& > span': {
      fontSize: '1.4rem',
      color: theme.palette.common.primary.main
    }
  },
  reservationsText: {
    fontWeight: 'bold',
    color: theme.palette.common.primary.main
  },
  focus: {
    // borderBottom: `3px solid ${theme.palette.common.secondary.main}`
    boxShadow: `0 0 10px -4px ${theme.palette.common.secondary.main}`,
  }
}));
