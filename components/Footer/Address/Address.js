import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import * as _ from 'lodash';


export default function Address({ address }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography component='h4'>{address.title}</Typography>
      <Box component='ul' className={classes.list}>
        <li>{_.map(address.values.phones)}</li>
        <li>{address.values.email}</li>
        <li>{address.values.address.city}</li>
        <li>{address.values.address.street}</li>
        <li>{address.values.address.postCode}</li>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    alignItems: 'center',
  },
  container: {
    ...theme.container
  },
}));
