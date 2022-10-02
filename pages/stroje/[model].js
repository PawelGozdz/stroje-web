import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';

import { getModelByCustomProps } from '../../api/model';
import { Box, Container } from '@mui/material';

import * as qs from 'qs';
import { makeStyles } from '@mui/styles';

import { SameCategory } from '../../components/Model/SameCategory'
import FloatingMenu from '../../components/FloatingMenu';
import BreadCrumbs from '../../components/BreadCrumbs';
import { getPageProps } from '../../api/pages';
import PageModel from '../../components/Model/PageModel';
import { getGlobalProps } from '../../api/global';

export default function Model({ model, pageProps, globalProps }) {
  const classes = useStyles();

  return (
    <BasicLayout>
      <FloatingMenu />
      <BreadCrumbs />

      <PageModel modelProps={model} pageProps={pageProps} globalProps={globalProps} >
        {model && (
          <Box component='section' className={classes.section}>
            <Container maxWidth='xl' className={classes.container}>
              <SameCategory model={model} />
            </Container>
          </Box>
        )}
      </PageModel>

    </BasicLayout>
  )
}

export async function getServerSideProps(context) {
  const buildQuery = qs.stringify({ _where: { 'url': context.query.model } });
  const data = getModelByCustomProps(buildQuery);

  const pageProps = getPageProps(
    qs.stringify({
      strona: 'model'
    })
  );

  const globalProps = getGlobalProps();

  const [modelData, pagePropsData, globalPropsData] = await Promise.all([data, pageProps, globalProps]);

  return {
    props: {
      model: modelData?.[0] || null,
      pageProps: pagePropsData,
      globalProps: globalPropsData,
    }
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
    ...theme.container,
    display: 'block'
  },
  sectionSubHeader: {
    color: theme.palette.grey[500]
  },
  listWrapper: {
    display: 'flex',
  },
}));
