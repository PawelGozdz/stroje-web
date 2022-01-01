import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import * as qs from 'qs';

import Pagination from '../../../Pagination';
import * as _ from 'lodash';
import ListModelsCards from '../../../ListModelsCards';
import { limitPerPage, getStartItem } from '../../../../utils/fetch';
import { getModelByCustomProps, getModelByCustomPropsCount } from '../../../../api/model';


export default function SameTypeList({ model }) {
  const classes = useStyles();

  const [models, setModels] = useState(null);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(null);

  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      setLoader(true);
      const buildQuery = {
        _limit: limitPerPage(query),
        _start: getStartItem(query),
      };

      const where = {
        _where: [
          { 'categories.kategoria_in': model.categories.map(c => c.kategoria) },
          { 'url_nin': model.url }
        ]
      };
      const getModels = qs
        .stringify({
          ...buildQuery,
          ...where
        });

      const response = await getModelByCustomProps(getModels);
      const responseCount = await getModelByCustomPropsCount(
        qs.stringify(where)
      );

      setModels(response || null);
      setCount(responseCount || null);
      setLoader(false);
    })();
  }, [model]);

  return (
    <Box component='section' className={classes.section} id='same'>
      <Container maxWidth='xl' className={classes.container} className={classes.loader} >
        {loader
          ? <CircularProgress />
          : _.size(models) > 0 && <ListModelsCards models={models} />
        }
      </Container>
      <Pagination
        page={query.page ? parseInt(query.page) : 1}
        total={count}
        limitPerPage={limitPerPage(query)}
      />
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
    }
  },
  section: {
    ...theme.sections.section,
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    ...theme.container,
  }
}));
