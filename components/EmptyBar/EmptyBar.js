import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box } from '@mui/material';

export default function EmptyBar({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.space}>
      {children}
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  space: {
    minHeight: '6rem'
  }
}));
