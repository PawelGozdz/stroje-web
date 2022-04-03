import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { size, map, chunk } from 'lodash';
import Link from 'next/link';

export default function FooterCategoriesList({ categories }) {
  const classes = useStyles();

  const categoriesInChunk = chunk(categories.values, 8);
  
  return (
    <Box>
      <Typography component='h4'>{categories.title}</Typography>
      <Box className={classes.listContainer}>
        {
          size(categoriesInChunk) > 0 && (
            map(categoriesInChunk, (categoriesChunk, i) => (
              <Box component='ul' key={i} className={classes.list}>
                {
                  categoriesChunk &&
                  map(categoriesChunk, item => <Categoria item={item} key={item.kategoria} />)
                }
              </Box>
            ))
          )
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
  listContainer: {
    display: 'flex'
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
    textDecoration: 'underline',
    marginBottom: theme.spacing(1)
  }
}));
