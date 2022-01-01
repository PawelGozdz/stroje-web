import React from 'react';
import { makeStyles } from '@mui/styles';

import IconButton from '@mui/material/IconButton';
import * as _ from 'lodash';
import clsx from 'clsx';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';

export default function CustomActions({ handleExpandClick, expanded, title }) {
  const classes = useStyles();

  return (
    <CardActions disableSpacing className={classes.actions}>
      <Typography variant="body2" color="textSecondary" component="p">
        {title}
      </Typography>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  );
};

const useStyles = makeStyles(theme => ({
  actions: {
    marginLeft: theme.spacing(0),
  }
}));