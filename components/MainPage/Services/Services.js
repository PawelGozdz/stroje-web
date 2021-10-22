import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import ListModelCards from '../../ListModelsCards';
import { getModelsApi } from '../../../api/model';
import { limitPerPage, getStartItem } from '../../../utils/fetch';

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

      const response = await getModelsApi({
        sort: 'created_at:DESC',
        limit,
        page
      });

      setModels(response || []);
      setLoader(false);
    })();
  }, []);

  return (
    <Box component='section' className={classes.section} id='news'>
      <Container maxWidth='lg' className={classes.container}>
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
    background: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )',
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

