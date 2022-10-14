import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import ListModelCards from '../../../ListModelsCards';
import { limitPerPage, getStartItem } from '../../../../utils/fetch';
import * as qs from 'qs';
import { getDModelsApi } from '../../../../api/d-model';

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
      const response = await getDModelsApi(qsQuery);

      setModels(response || []);
      setLoader(false);
    })();
  }, []);

  return (
    <Box component='section' className={classes.section} id='news'>
      <Container maxWidth='xl' className={classes.container}>
        <Typography variant='h3' component='h3' className={classes.sectionHeader}>Nowości - dodatki</Typography>
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
    background: 'rgb(46,32,173)',
    background: 'linear-gradient(83deg, rgba(46,32,173,1) 0%, rgba(132,22,204,1) 50%, rgba(234,10,240,1) 100%, rgba(242,143,4,1) 100%)',
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

