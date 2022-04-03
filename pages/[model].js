import React, { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Box, CircularProgress, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';

import { getModelByCustomProps } from '../api/model';
import * as _ from 'lodash';
import * as qs from 'qs';

import ModelHero from '../components/Model/ModelHero';
import ModelSlides from '../components/Model/ModelHero/ModelSlides';
import ModelDescription from '../components/Model/ModelHero/ModelDescription';
import {SameCategory} from '../components/Model/SameCategory';
import FloatingMenu from '../components/FloatingMenu';
import BreadCrumbs from '../components/BreadCrumbs';

export default function Model({ data }) {
  const classes = useStyles();

  const [model, setModel] = useState(null);
  const [loader, setLoader] = useState(false);

  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      setLoader(true);
      setModel(data?.[0]);
      setLoader(false);
    })();
  }, [query]);
  
  return (
    <BasicLayout>
      <FloatingMenu />
      <BreadCrumbs />

      {(loader || !model) ? (
        <Box className={classes.spaceFiller}><CircularProgress /></Box>
      ) : (
        <ModelHero>
          <ModelSlides model={model} loader={loader} />
          <ModelDescription model={model} loader={loader} />
        </ModelHero>
      )}

      {model && (
        <Box component='section' className={classes.section}>
          <Container maxWidth='xl' className={classes.container}>
            <SameCategory model={model} />
          </Container>
        </Box>
      )}

    </BasicLayout>
  )
}

export async function getServerSideProps(context) {
  const buildQuery = qs.stringify({ _where: { 'url': context.query.model } });
  const data = await getModelByCustomProps(buildQuery);

  return {
    props: { data } 
  }
}

const useStyles = makeStyles(theme => ({
  spaceFiller: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    ...theme.sections.section,
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(7),
    }
  },
  container: {
    padding: 0
  }
}));
