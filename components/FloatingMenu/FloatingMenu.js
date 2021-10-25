import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import { Container, Box, Divider } from '@mui/material';
import ListMenu from './CategoryMenu';
import { useAppContext } from '../../context/StateContext';

export default function FloatingMenu() {
  const classes = useStyles();

  const additionalMenuItems = [{
    title: 'Więcej...',
    url: 'modele'
  }];

  const { genders, categories } = useAppContext();

  return (
    <Box component='section' className={classes.section} id='floating-menu'>
      <Container maxWidth='xl' className={classes.container}>
        <ListMenu menu={genders} query={'plec'} />
        <Divider orientation="vertical" variant="middle" flexItem className={classes.divider} />
        <ListMenu menu={categories} />
      </Container>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    background: theme.palette.grey[100],
    marginTop: theme.spacing(1.25)
  },
  container: {
    ...theme.container
  },
  divider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
