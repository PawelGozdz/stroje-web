import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';
import * as _ from 'lodash';
import GenderButtons from '../GenderButtons';
import DodatkiButtons from '../DodatkiButtons/DodatkiButtons';
import Link from 'next/link';

export default function HomeHeroContent() {
  const classes = useStyles();

  const scrollToElement = async () => {
    document.getElementById('news').scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Grid
      container item
      className={classes.action}
      sm={12} md={6}
    >
      <Typography variant='h4' component='h2' className={classes.subHeading} >
        Jakiego stroju szukasz?
      </Typography>
      <Typography component='p' className={classes.subHeading} >
        Superbohaterowie, rycerze, postacie z kreskówek, oraz wiele innych...
      </Typography>

      <Box component='div' className={classes.searchLink} >
        <Link href={`/stroje`} passHref>
          <a className={classes.ctaButton}>Stroje</a>
        </Link>
      </Box>

      <Typography variant='h4' component='h2' className={classes.subHeading} >
        Czy potrzebujesz dodatków?
      </Typography>

      <Box component='div' className={classes.searchLink} >
        <Link href={`/dodatki`} passHref>
          <a className={classes.ctaButton}>Dodatki</a>
        </Link>
      </Box>

      <Typography variant='h4' component='h2' className={classes.subHeading} >
        Sprawdź nowości
      </Typography>

      <Box component='div'>
        <a className={classes.ctaButton} onClick={scrollToElement}>Nowości</a>
      </Box>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  subHeading: {
    color: theme.palette.grey[50],
  },
  ctaButton: {
    ...theme.customButtons.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    },
    color: theme.palette.grey[50],
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    order: 2,
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      textAlign: 'center',
      order: 1,
      marginTop: '5rem'
    },
    '& > *:not(:last-child)': {
      marginBottom: '1rem',
      [theme.breakpoints.up('sm')]: {
        marginBottom: '1.2rem'
      },
    }
  },
}));
