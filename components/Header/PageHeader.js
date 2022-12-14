import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Toolbar } from '@mui/material';
import TopBar from './TopBar';
import Menu from './Menu';
import { menu } from '../../utils/constants';

export default function PageHeader() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <Toolbar className={classes.toolbar}>
        <TopBar menu={menu} />
        <Menu menu={menu} />
      </Toolbar>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center !important",
    padding: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
  },
}));


