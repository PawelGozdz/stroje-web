import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import ListModelCards from '../../ListModelsCards';
import { getModelsApi } from '../../../api/model';
import { limitPerPage, getStartItem } from '../../../utils/fetch';
import * as qs from 'qs';

export default function Services() {
  const classes = useStyles();
  const { query } = useRouter();

  const [models, setModels] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      query.limit = 6;
      const limit = limitPerPage(query);
      const page = getStartItem(query);

      const qsQuery = qs.stringify({
        _sort: 'created_at:DESC',
        _limit: limit,
        _start: page
      });
      const response = await getModelsApi(qsQuery);
      console.log(response)

      setModels(response || []);
      setLoader(false);
    })();
  }, []);

  return (
    <Box component='section' className={classes.section} id='news'>
      <Container maxWidth='xl' className={classes.container}>
        <Typography variant='h3' component='h3' className={classes.sectionHeader}>Nowości</Typography>
      </Container>
      <Container maxWidth='xl' className={classes.container} className={classes.loader} >
        {loader
          ? <CircularProgress />
          : <ListModelCards models={models} />
        }
      </Container>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    // background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    // background: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )',
    background: 'rgb(227, 18, 37)',
    background: 'linear-gradient(83deg, rgba(227,18,37,1) 0%, rgba(245,246,5,1) 0%, rgba(246,166,5,1) 20%, rgba(246,5,22,1) 50%, rgba(246,5,115,1) 87%)',
    alignItems: 'center',
    color: theme.palette.grey[50]
  },
  container: {
    ...theme.container,
    alignItems: 'center'
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

