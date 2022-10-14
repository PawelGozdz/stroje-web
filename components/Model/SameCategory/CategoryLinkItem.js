import React from 'react';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import Link from 'next/link';

export function CategoryLinkItem({ category, type = 'kategoria' }) {
  const classes = useStyles();

  const categoryCorrectType = typeof category === 'string' ? category : category.url;

  return (
    <Link href={`/${type}?kategoria=${categoryCorrectType}`} passHref>
      <a className={classes.categoryLink}>{category.kategoria}</a>
    </Link>
  )
}

const useStyles = makeStyles(theme => ({
  categoryLink: {
    ...theme.typography.h6,
    color: theme.palette.common.primary.main,
    textDecoration: 'underline',
    marginRight: theme.spacing(1),
  },
}));
