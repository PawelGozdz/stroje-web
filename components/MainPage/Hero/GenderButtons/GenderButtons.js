import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';
import { Box, CircularProgress } from '@mui/material';
import { getGendersApi } from '../../../../api/gender';

export default function GenderButtons() {
  const classes = useStyles();

  const [gender, setGender] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const response = await getGendersApi();
      setGender(response || []);
      setLoader(false);
    })();
  }, []);

  return (
    <>
      <ButtonList gender={gender} classes={classes} loader={loader} />
    </>
  )
}

const ButtonList = ({ gender, classes, loader }) => {
  return (
    <Box component='div' className={classes.buttons}>
      {loader
        ? <CircularProgress />
        : _.size(gender) > 0 && _.map(gender, genderItem => <ButtonCta genderItem={genderItem} key={genderItem.url} classes={classes} />)
      }
    </Box>
  );
};

const ButtonCta = ({ genderItem, classes }) => {
  return (
    <Box component='div' className={classes.searchLink} >

      <Link href={`/kategoria/${genderItem.url}?q=plec`} passHref>
        <a className={classes.ctaButton}>{genderItem.title}</a>
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
