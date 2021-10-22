import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as qs from 'qs';

import { getModelByCustomProps } from '../../../../api/model';
import * as _ from 'lodash';
import ListModelsCards from '../../../ListModelsCards';


export default function SameTypeList({ model }) {
  const classes = useStyles();

  const [models, setModels] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);

      const buildQuery = qs
        .stringify({
          _where: [
            { 'categories.kategoria_in': model.categories.map(c => c.kategoria) },
            { 'url_nin': model.url }
          ]
        });

      const response = await getModelByCustomProps(buildQuery);

      setModels(response || null);
      setLoader(false);
    })();
  }, [model]);

  return (
    <Container maxWidth='xl' className={classes.container} className={classes.loader} >
      {loader
        ? <CircularProgress />
        : _.size(models) > 0 && <ListModelsCards models={models} />
      }
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    ...theme.sections.section
  },
  container: {
    ...theme.container
  }
}));
