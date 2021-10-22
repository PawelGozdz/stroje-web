import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Grid } from '@mui/material';
import * as _ from 'lodash';

import Image from '../../../Image';
import CarouselScreenshots from '../../../CarouselScreenshots';

export default function ModelSlides({ model: { zdjecia } }) {
  const classes = useStyles();

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image
            formats={zdjecia[i]?.formats}
            src={zdjecia[i]?.formats?.thumbnail?.url}
            aspectRatio={0.75}
            alt={zdjecia[i]?.alternativeText}
            title={zdjecia[i]?.caption}
            key={zdjecia[i]?.id} />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: classes.thumb,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: `slick-thumb`
  };

  return (
    <>
      {_.size(zdjecia) > 0 && (
        <Grid
          container item
          className={classes.slider}
          sm={12} md={5} lg={4}
        >
          <Paper variant="outlined" className={classes.photo}>
            <CarouselScreenshots
              className={classes.modelCarousel}
              images={zdjecia}
              settings={{ ...settings }}
              aspectRatio={0.7}
            />
          </Paper>
        </Grid>
      )}
    </>
  );
}

const useStyles = makeStyles(theme => ({
  photo: {
    width: '100%',
    maxWidth: '22rem',
    height: 'auto',
    background: 'transparent',
    border: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '20rem'
    },
  },
  slider: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: theme.spacing(4),
    },
  },
  thumb: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex !important',
    '& > li': {
      minWidth: '3rem',
      height: 'auto',
      margin: theme.spacing(1),
      maxWidth: '4rem'
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
  },
}));
