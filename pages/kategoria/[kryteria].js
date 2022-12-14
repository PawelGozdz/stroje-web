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
import { getModelsByCustomProps, getModelsByCustomPropsCount } from '../../api/model';
import { limitPerPage, getStartItem } from '../../utils/fetch';
import EmptyBar from '../../components/EmptyBar';
import { getDModelsByCustomProps } from '../../api/d-model';
import Seo from '../../components/Seo/Seo';
import { useAppContext } from '../../context/StateContext';

export default function Model({ modelsArr, modelsCount, modelsDArr, modelsDCount }) {
  const classes = useStyles();
  const { query } = useRouter();

  const [models, setModels] = useState(null);
  const [modelsD, setModelsD] = useState(null);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(null);
  const [countD, setCountD] = useState(null);

  useEffect(() => {
    (async () => {
      setLoader(true);

      setModels(modelsArr);
      setCount(modelsCount);
      setModelsD(modelsDArr);
      setCountD(modelsDCount);

      setLoader(false);
    })();
  }, [query]);

  const category = query.kryteria;
  const { categories } = useAppContext();
  const cat = categories.find(c => c.url.toLowerCase() === category.toLowerCase());

  return (
    <BasicLayout>
      <Seo />
      <FloatingMenu />
      <BreadCrumbs />

      {_.size(models) > 0 ? (
        <>
          <SectionHeader message={
            category
              ? `${_.upperFirst('stroje')} z kategorii ${category}`
              : `${_.upperFirst('stroje')}`
          } />
          <SectionDisplay category={category} loader={loader} models={models} />
          <SectionPagination query={query} count={count} />
        </>
      ) : (
        <SectionHeader message={`Nie znaleziono stroj??w z kategorii ${category}`} />
      )}



      <EmptyBar />

      {_.size(modelsD) > 0 ? (
        <>
          <SectionHeader message={
            category
              ? `${_.upperFirst('dodatki')} z kategorii ${category}`
              : `${_.upperFirst('dodatki')}`
          } />
          <SectionDisplay category={category} loader={loader} models={modelsD} />
        </>
      ) : (
        <SectionHeader message={`Nie znaleziono dodatk??w z kategorii ${category}`} />
      )}

      <EmptyBar />

    </BasicLayout>
  )
}

const SectionHeader = ({ message }) => {
  const classes = useStyles();

  return (
    <Box component='section' className={classes.section}>
      <Container maxWidth='xl' className={classes.container}>
        <Typography variant='h4' component='h3' className={classes.sectionHeader}>{message}</Typography>
      </Container>
    </Box>
  )
}

const SectionPagination = ({ query, count }) => {

  return (
    <Pagination
      page={query.page ? parseInt(query.page) : 1}
      total={count}
      limitPerPage={limitPerPage(query)}
    />
  )
}

const SectionDisplay = ({ loader, models }) => {
  const classes = useStyles();

  return (
    <>
      {loader ? (
        <Box className={classes.spaceFiller}><CircularProgress /></Box>
      ) : (

        <Box component='section' className={classes.section}>
          <Container maxWidth='xl' className={classes.container}>
            <ListModelCards models={models} />
          </Container>
        </Box>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const query = context.query;

  const buildQuery = {
    _limit: limitPerPage(query),
    _start: getStartItem(query),
  };

  const getResponse = getModelsByCustomProps(
    qs.stringify({ ...buildQuery, _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
  );

  const getResponseCount = getModelsByCustomPropsCount(
    qs.stringify({ _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
  );

  const getResponseD = getDModelsByCustomProps(
    qs.stringify({ ...buildQuery, _where: { [`${query.q || 'categories'}.url`]: query.kryteria }, _start: 0 })
  );

  // const getResponseDCount = getDModelsByCustomPropsCount(
  //   qs.stringify({ _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
  // );

  const [response, responseCount, responseD] = await Promise.all([getResponse, getResponseCount, getResponseD])

  return {
    props: {
      modelsArr: response,
      modelsCount: responseCount,
      modelsDArr: responseD,
    }
  }
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
  },
  categoryLink: {
    ...theme.typography.h6,
    color: theme.palette.common.secondary,
    textDecoration: 'underline',
    marginRight: theme.spacing(1),
  }
}));
