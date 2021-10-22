import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { makeStyles } from '@mui/styles';
import { Box, Container } from '@mui/material';


export default function BreadCrumbs() {
  const classes = useStyles();

  return (
    <Box component='section' className={classes.section} id='floating-bread-crumbs'>
      <Container maxWidth='xl' className={classes.container}>
        <Breadcrumbs
          transformLabel={(title) => title + ' /'}
          activeItemClassName={classes.activeItem}
          inactiveItemClassName={classes.inactiveItem}
          listClassName={classes.list}
          labelsToUppercase='true' />
      </Container>
    </Box>
  );
}

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
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: theme.spacing(.25),
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
    '& > li:not(:last-child)': {
      marginRight: theme.spacing(0.25),
    },

    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[800]}`,
    }
  },
  inactiveItem: {
    '& > a': {
      color: `${theme.palette.grey[500]}`,
      fontSize: '.6rem',
    },
  },
  activeItem: {
    '& > a': {
      color: `${theme.palette.grey[900]}`,
      fontSize: '.6rem',
    },
  },
  section: {
    marginTop: theme.spacing(0.5)
  },
  container: {
    ...theme.container
  }

}));
