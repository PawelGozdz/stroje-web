import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as _ from 'lodash';
import * as qs from 'qs';

import BasicLayout from '../../layouts/BasicLayout';
import ListModelCards from '../../components/ListModelsCards';
import BreadCrumbs from '../../components/BreadCrumbs';
import FloatingMenu from '../../components/FloatingMenu';
import Pagination from '../../components/Pagination';
import { getModelByCustomProps, getModelByCustomPropsCount } from '../../api/model';
import { limitPerPage, getStartItem } from '../../utils/fetch';
import EmptyBar from '../../components/EmptyBar';

export default function Model() {
  const classes = useStyles();
  const { query } = useRouter();

  const [models, setModels] = useState(null);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const buildQuery = {
        _limit: limitPerPage(query),
        _start: getStartItem(query),
      };

      const response = await getModelByCustomProps(
        qs.stringify({ ...buildQuery, _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
      );

      const responseCount = await getModelByCustomPropsCount(
        qs.stringify({ _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
      );

      setModels(response);
      setCount(responseCount);

      setLoader(false);
    })();
  }, [query]);

  return (
    <BasicLayout>
      <FloatingMenu />
      <BreadCrumbs />
      <Box component='section' className={classes.section} id='wyszukaj-kategoria'>
        <Container maxWidth='xl' className={classes.container}>

          <Typography variant='h4' component='h3' className={classes.sectionHeader}>
            Więcej z kategorii...
          </Typography>
          <Typography variant='h5' component='h4' className={classes.sectionSubHeader}>
            {
              _.size(query.kryteria) > 0 && query.kryteria
            }
          </Typography>
        </Container>
      </Box>

      {loader ? (
        <Box className={classes.spaceFiller}><CircularProgress /></Box>
      ) : (

        <Box component='section' className={classes.section}>
          <Container maxWidth='xl' className={classes.container}>
            <ListModelCards models={models} />
          </Container>
        </Box>
      )}

      <Pagination
        page={query.page ? parseInt(query.page) : 1}
        total={count}
        limitPerPage={limitPerPage(query)}
      />

      <EmptyBar />
    </BasicLayout>
  )
}

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    }
  },
  sectionSubHeader: {
    color: theme.palette.grey[500]
  },
  spaceFiller: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
