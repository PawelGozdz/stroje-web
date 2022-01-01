import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ModelCard from './ModelCard/ModelCard';

import * as _ from 'lodash';

export default function ListModels({ models }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.list} spacing={2} component='ul' className={classes.list} >
      {_.size(models) > 0 && _.map(models, model => (
        <ModelCard model={model} key={model.url} />
      ))}
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center',
    margin: 'auto',
    padding: 0,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: '3rem',
    },
  },
}));
