import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';

import { Container, Box, Divider } from '@mui/material';
import ListMenu from './CategoryMenu';
import { useAppContext } from '../../context/StateContext';
import CustomActions from '../CustomCollapse/CustomActions';
import CustomCollapse from '../CustomCollapse/CustomCollapse';

export default function FloatingMenu() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const { genders, categories } = useAppContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const title = 'Rozwiń kategorie';

  return (
    <Box component='section' className={classes.section} id='floating-menu'>
      <Container maxWidth='xl' className={classes.container}>
        <CustomActions
          handleExpandClick={handleExpandClick}
          expanded={expanded}
          title={title}
        />
        <CustomCollapse expanded={expanded}>
          <ListMenu menu={genders} query={'plec'} />
          <Divider orientation="vertical" variant="middle" flexItem className={classes.divider} />
          <ListMenu menu={categories} />
        </CustomCollapse>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    background: theme.palette.grey[100],
    marginTop: theme.spacing(1.25),
  },
  container: {
    ...theme.container
  },
  divider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
