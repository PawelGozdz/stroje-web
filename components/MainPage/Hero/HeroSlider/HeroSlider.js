import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, CircularProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CarouselScreenshots from '../../../CarouselScreenshots';
import * as _ from 'lodash';

export default function HeroSlider() {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    (async () => {
      setLoader(true);

      const response = tempImages;

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

const tempImages = [{
  "id": 6,
  "name": "batman-ps4.jpg",
  "alternativeText": "Batman na czarno",
  "caption": "BAtman czarny",
  "width": 393,
  "height": 500,
  "formats": {
    "thumbnail": {
      "name": "thumbnail_batman-ps4.jpg",
      "hash": "thumbnail_batman_ps4_aefd777ea3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 123,
      "height": 156,
      "size": 6.21,
      "path": null,
      "url": "/uploads/thumbnail_batman_ps4_aefd777ea3.jpg"
    },
    "xsmall": {
      "name": "xsmall_batman-ps4.jpg",
      "hash": "xsmall_batman_ps4_aefd777ea3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 50,
      "height": 64,
      "size": 1.69,
      "path": null,
      "url": "/uploads/xsmall_batman_ps4_aefd777ea3.jpg"
    }
  },
  "hash": "batman_ps4_aefd777ea3",
  "ext": ".jpg",
  "mime": "image/jpeg",
  "size": 41.21,
  "url": "/uploads/batman_ps4_aefd777ea3.jpg",
  "previewUrl": null,
  "provider": "local",
  "provider_metadata": null,
  "created_at": "2021-10-11T17:18:49.000Z",
  "updated_at": "2021-10-11T17:18:50.000Z"
},
{
  "id": 7,
  "name": "kapitan-ameryka-stroj.jpg",
  "alternativeText": "Batman na niebiesko",
  "caption": "Batmak na niebiesko",
  "width": 1302,
  "height": 1734,
  "formats": {
    "thumbnail": {
      "name": "thumbnail_kapitan-ameryka-stroj.jpg",
      "hash": "thumbnail_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 117,
      "height": 156,
      "size": 3.74,
      "path": null,
      "url": "/uploads/thumbnail_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "xlarge": {
      "name": "xlarge_kapitan-ameryka-stroj.jpg",
      "hash": "xlarge_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 1291,
      "height": 1720,
      "size": 111.35,
      "path": null,
      "url": "/uploads/xlarge_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "large": {
      "name": "large_kapitan-ameryka-stroj.jpg",
      "hash": "large_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 901,
      "height": 1200,
      "size": 66.69,
      "path": null,
      "url": "/uploads/large_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "medium": {
      "name": "medium_kapitan-ameryka-stroj.jpg",
      "hash": "medium_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 646,
      "height": 860,
      "size": 40.73,
      "path": null,
      "url": "/uploads/medium_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "small": {
      "name": "small_kapitan-ameryka-stroj.jpg",
      "hash": "small_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 451,
      "height": 600,
      "size": 24.42,
      "path": null,
      "url": "/uploads/small_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "xsmall": {
      "name": "xsmall_kapitan-ameryka-stroj.jpg",
      "hash": "xsmall_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 48,
      "height": 64,
      "size": 1.31,
      "path": null,
      "url": "/uploads/xsmall_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    }
  },
  "hash": "kapitan_ameryka_stroj_33f9d83ce3",
  "ext": ".jpg",
  "mime": "image/jpeg",
  "size": 104.64,
  "url": "/uploads/kapitan_ameryka_stroj_33f9d83ce3.jpg",
  "previewUrl": null,
  "provider": "local",
  "provider_metadata": null,
  "created_at": "2021-10-11T17:18:49.000Z",
  "updated_at": "2021-10-11T17:18:50.000Z"
}]
