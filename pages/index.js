import BasicLayout from '../layouts/BasicLayout';
import Hero from '../components/MainPage/Hero';
import HeroSlider from '../components/MainPage/Hero/HeroSlider'
import HomeHeroContent from '../components/MainPage/Hero/HomeHeroContent';
import EmptyBar from '../components/EmptyBar';
import * as qs from 'qs';
import FloatingMenu from '../components/FloatingMenu';
import { getPageProps } from '../api/pages';
import { getGlobalProps } from '../api/global';
import PageBanner from '../components/PageShares/PageBanner';
import { Typography, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { size } from 'lodash';
import Seo from '../components/Seo/Seo';
import RecentlyAddedModels from '../components/MainPage/RecentyAdded/RecentlyAddedModels';
import RecentlyAddedDModels from '../components/MainPage/RecentyAdded/RecentlyAddedDModels';

export default function Home({ pageProps, globalProps }) {
  const classes = useStyles();

  const indexPageData = pageProps;

  const bannerData = indexPageData && indexPageData?.Extensions?.find(el => el.__component === 'banner.banner');
  const pageHeaders = indexPageData && indexPageData?.Extensions?.filter(el => el.__component === 'headers.page-headers');
  const pageSlider = indexPageData && indexPageData?.Extensions?.find(el => el.__component === 'slider.slider');

  return (
    <BasicLayout>
      <Seo />
      <FloatingMenu />
      {bannerData?.page_banners?.length > 0 && <PageBanner banners={bannerData.page_banners} />}
      {pageHeaders && size(pageHeaders) > 0 &&
        <Container maxWidth='xl' className={classes.container}>
          {pageHeaders.map(header => (
            <Box className={classes.headers} key={header.Header}>

              <Typography
                component={header.Type}
                variant={header.Type}
                key={header.Header}

              >
                {header.Header}
              </Typography>
            </Box>
          ))}
        </Container>
      }
      <Hero >
        {pageSlider?.slider && pageSlider.slider.length > 0 && <HeroSlider slides={pageSlider?.slider} />}
        <HomeHeroContent />
      </Hero>

      <EmptyBar />

      <RecentlyAddedModels />
      <EmptyBar />

      <RecentlyAddedDModels />

      <EmptyBar />
    </BasicLayout>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  headers: {
    color: theme.palette.text.secondary,
    wordBreak: 'break-word',
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    '& > h1': {
      fontSize: theme.typography.pxToRem(64),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(52),
      }
    },
    '& > h2': {
      fontSize: theme.typography.pxToRem(50),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(36),
      }
    },
    '& > h3': {
      fontSize: theme.typography.pxToRem(36),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(26),
      }
    },
    '& > h4': {
      fontSize: theme.typography.pxToRem(26),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(20),
      }
    },
    '& > h5': {
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(16),
      }
    },
    '& > h6': {
      fontSize: theme.typography.pxToRem(16),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(12),
      }
    },
  },
}));

export async function getServerSideProps(context) {
  const query = context;

  const pageProps = getPageProps(
    qs.stringify({
      strona: 'index'
    })
  );

  const globalProps = getGlobalProps();

  const [page, global] = await Promise.all([pageProps, globalProps]);

  return {
    props: {
      pageProps: page.find(d => d?.strona === 'index') || null,
      globalProps: Array.isArray(global) ? (global[0] || null) : null,
    }
  }
}
