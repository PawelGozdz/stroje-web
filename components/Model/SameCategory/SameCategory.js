import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { size } from 'lodash';

import SameTypeList from '../ModelHero/SameTypeList';
import { SameCategoriesItemList } from './';
import { MORE_IN_CATEGORIES } from '../../../constants/constants';

export function SameCategory({ model }) {
  const classes = useStyles();

  return (
    <Box component='section' className={classes.section} id='sameCategory'>
      <Typography variant='h4' component='h3' className={classes.sectionHeader}>
        {MORE_IN_CATEGORIES}
      </Typography>
      {
        model && size(model.categories) > 0 && (
          <SameCategoriesItemList categories={model.categories} />
        )
      }
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
