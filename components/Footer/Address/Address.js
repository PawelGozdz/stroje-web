import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import * as _ from 'lodash';
import LocationPointer from '../Map/LocationPointer';

export default function Address({ address }) {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography component='h4'>{address.title}</Typography>
      <Box className={classes.addressContainer}>
        <Box component='ul' className={classes.list}>
          <li>{_.map(address.values.phones)}</li>
          <li>{address.values.email}</li>
          <li>{address.values.address.city}</li>
          <li>{address.values.address.street}</li>
          <li>{address.values.address.postCode}</li>
        </Box>
        <Box className={classes.map}>
          <LocationPointer />
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%'
  },
  section: {
    ...theme.sections.section,
    alignItems: 'center',
  },
  container: {
    ...theme.container
  },
  addressContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      width: '100%'
    },
  },
  map: {
    flexGrow: 1
  }
}));
