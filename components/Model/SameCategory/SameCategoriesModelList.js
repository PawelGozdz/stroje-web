import React from 'react';
import { List } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import { CategoryLinkItem } from './';

export function SameCategoriesItemList(props) {
  const classes = useStyles();

  return (
    <List className={classes.categoryList}>
      {
        _.map(props.categories, c => <CategoryLinkItem category={c} key={c.url} className={classes.categoryLink}/>)
      }
    </List>
  )
}

const useStyles = makeStyles(theme => ({
  categoryList: {
    display: 'flex',
    flexGrow: 0
  },
}));
