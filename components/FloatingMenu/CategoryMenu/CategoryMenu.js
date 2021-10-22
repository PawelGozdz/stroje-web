import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import { Box, Typography } from '@mui/material';

export default function CategoryMenu({ menu, query = '' }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.menuList} component='ul' className={classes.list}>
        {
          _.size(menu) > 0 &&
          _.map(menu, item => <CategoryItem item={item} query={query} key={item.url} />)
        }
      </Box>
    </>
  )
}

const CategoryItem = ({ item, query }) => {
  const classes = useStyles();

  return (
    <Box component='li' className={classes.searchLink} >

      <Link href={`/kategoria/${item.url}${query ? `?q=${query}` : ''}`} passHref>
        <a>{item.title || item.kategoria}</a>
      </Link>

    </Box>
  )
};

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchLink: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[900]}`
    }
  },
  list: {
    display: 'flex',
    listStyleType: 'none',
    marginLeft: 0,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    '& > li:not(:last-child)': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.only('xs')]: {
        marginRight: theme.spacing(1),
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  },

}));
