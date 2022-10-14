import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import { Box, CircularProgress } from '@mui/material';
import { getDCategoriesApi } from '../../../../api/d-categories';

export default function DodatkiButtons() {
  const classes = useStyles();
  const dodatkiMaxSize = 4;

  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const response = await getDCategoriesApi();
      setCategories(response || []);
      setLoader(false);
    })();
  }, []);

  if (!categories || categories.length === 0) {
    return <div></div>
  }

  return (
    <>
      <ButtonList categories={categories} classes={classes} loader={loader} dodatkiMaxSize={dodatkiMaxSize} />
    </>
  )
}

const ButtonList = ({ categories, classes, loader, dodatkiMaxSize }) => {
  return (
    <Box component='div' className={classes.buttons}>
      {loader
        ? <CircularProgress />
        : _.size(categories) > 0 && _.take(
          _.map(categories, category => <ButtonCta category={category} key={category.url} classes={classes} />),
          dodatkiMaxSize
        )
      }
    </Box>
  );
};

const ButtonCta = ({ category, classes }) => {
  return (
    <Box component='div' className={classes.searchLink} >

      <Link href={`/dodatki/${category.url}?q=plec`} passHref>
        <a className={classes.ctaButton}>{category.kategoria}</a>
      </Link>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  subHeading: {
    color: theme.palette.grey[50],
  },
  buttons: {
    paddingBottom: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(1),
    },
  },
  ctaButton: {
    ...theme.customButtons.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    },
    color: theme.palette.grey[50],
  },
}));
