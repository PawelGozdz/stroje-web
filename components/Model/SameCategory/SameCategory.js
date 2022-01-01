import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';

import SameTypeList from '../ModelHero/SameTypeList';

export default function SameCategory({ model }) {
  const classes = useStyles();

  return (
    <Box component='section' className={classes.section} id='sameCategory'>
      <Container maxWidth='lg' className={classes.container}>

        <Typography variant='h4' component='h3' className={classes.sectionHeader}>
          Więcej z kategorii...
        </Typography>

        <Typography variant='h5' component='h4' className={classes.sectionSubHeader}>
          {
            _.size(model.categories) > 0 &&
            _.map(model.categories, c => c.kategoria).join(', ')
          }
        </Typography>

      </Container>

      <SameTypeList model={model} />
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    alignItems: 'center',
  },
  container: {
    ...theme.container,
    display: 'block'
  },
  sectionSubHeader: {
    color: theme.palette.grey[500]
  },
}));
