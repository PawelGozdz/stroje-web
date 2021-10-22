import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import ListModels from '../ListModels';

export default function SectionContainer() {
  return (
    <Box component='section' className={classes.section} id='news'>
      <Container maxWidth='lg' className={classes.container}>
        <Typography variant='h3' component='h3' className={classes.sectionHeader}>XXX</Typography>
      </Container>
      <Container maxWidth='xl' className={classes.container} className={classes.loader} >


      </Container>
    </Box>
  )
}
