import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CarouselScreenshots from '../../../CarouselScreenshots';
import * as _ from 'lodash';

export default function HeroSlider({ slides }) {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    (async () => {
      setLoader(true);

      const response = slides;

      setImages(response || null);
      setLoader(false);
    })();
  }, []);

  return (
    <Grid
      container item
      className={classes.slider}
      sm={12} md={6}
    >
      <Paper variant="outlined" className={classes.photo}>
        {loader
          ? <CircularProgress />
          : _.size(images) > 0 && (
            <CarouselScreenshots
              className={classes.carousel}
              images={images}
            />
          )
        }
      </Paper>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  photo: {
    width: '100%',
    maxWidth: '22rem',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '20rem'
    },
  },
  slider: {
    order: 1,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      order: 2
    },
  },
  carousel: {
    maxHeight: '100%'
  }
}));
