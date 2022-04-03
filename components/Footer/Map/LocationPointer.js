import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';


export default function LocationPointer() {
  const classes = useStyles();

  return (
    <Box>
        <iframe 
            src="https://maps.google.com/maps?q=starachowice,%20ul.%20owocowa%203&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0" 
            scrolling="no" 
            allowFullScreen=""
            loading="lazy"
            className={classes.map}
        />
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  map: {
      width: '100%',
      height: '300px',
  }
}));
