import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import * as _ from 'lodash';
import Link from 'next/link';

export default function FooterCategoriesList({ categories }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography component='h4'>{categories.title}</Typography>
      <Box component='ul' className={classes.list}>
        {
          _.size(categories.values) > 0 &&
          _.map(categories.values, item => <Categoria item={item} key={item.kategoria} />)
        }
      </Box>
    </Box>
  );
}

const Categoria = ({ item, query }) => {
  const classes = useStyles();

  return (
    <Box component='li' >

      <Link href={`/kategoria/${item.url}`} passHref>
        <a className={classes.link}>{item.kategoria}</a>
      </Link>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    ...theme.container
  },
  footer: {
    minHeight: '4rem;',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: theme.spacing(0)
  },
  link: {
    textDecoration: 'underline'
  }
}));
