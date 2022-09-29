import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';

import { getModelByCustomProps } from '../../api/model';
import * as qs from 'qs';

import FloatingMenu from '../../components/FloatingMenu';
import BreadCrumbs from '../../components/BreadCrumbs';
import { getGlobalProps } from '../../api/global';
import { getPageProps } from '../../api/pages';
import PageModel from '../../components/Model/PageModel';

export default function Model({ model, pageProps, globalProps }) {

  return (
    <BasicLayout>
      <FloatingMenu />
      <BreadCrumbs />

      <PageModel modelProps={model?.[0]} pageProps={pageProps} globalProps={globalProps} />

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
      model: modelData,
      pageProps: pagePropsData,
      globalProps: globalPropsData,
    }
  }
}

