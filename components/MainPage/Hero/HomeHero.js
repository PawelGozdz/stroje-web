import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box } from '@mui/material';

export default function HomeHero({ children }) {
  const classes = useStyles();

  return (
    <Box component='section' className={classes.section}>
      <Container maxWidth='lg' className={classes.container} >
        {children}
      </Container>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    // background: 'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );',
    background: 'rgb(46,32,173)',
    background: 'linear-gradient(83deg, rgba(46,32,173,1) 0%, rgba(132,22,204,1) 50%, rgba(234,10,240,1) 100%, rgba(242,143,4,1) 100%)',
    alignItems: 'center',
  },
  container: {
    ...theme.container
  },
}));
