import React, { useState, useEffect } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import * as qs from 'qs';

import Pagination from '../../../Pagination';
import * as _ from 'lodash';
import ListModelsCards from '../../../ListModelsCards';
import { limitPerPage, getStartItem } from '../../../../utils/fetch';
import { getModelsByCustomProps, getModelsByCustomPropsCount } from '../../../../api/model';
import { getDModelsByCustomProps, getDModelsByCustomPropsCount } from '../../../../api/d-model';


export default function SameTypeList({ model, type }) {
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
          { 'url_nin': model.url },
          { ...(model?.plec?.url && { 'plec.url': model.plec.url } || {}) },
          { type: model.type }
        ]
      };

      const getModels = qs
        .stringify({
          ...buildQuery,
          ...where,
        });

      const getModelCount = qs.stringify({ ...where });

      const responseData = type === 'dodatki' ? getDModelsByCustomProps(getModels) : getModelsByCustomProps(getModels);
      const responseCountData = type === 'dodatki' ? getDModelsByCustomPropsCount(getModelCount) : getModelsByCustomPropsCount(getModelCount);

      try {
        const [response, responseCount] = await Promise.all([responseData, responseCountData]);

        setModels(response || null);
        setCount(responseCount || null);

      } catch (error) {
        console.log(error);
      }

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
      {models?.length > 0 &&
        <Pagination
          page={query.page ? parseInt(query.page) : 1}
          total={count}
          limitPerPage={limitPerPage(query)}
        />
      }
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
