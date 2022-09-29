import React, { useState } from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Image from '../../Image';
import * as _ from 'lodash';
import CustomCardHeader from './CustomCardHeader';
import CustomCardContent from './CustomCardContent';
import CustomActions from '../../CustomCollapse/CustomActions';
import CustomCollapse from '../../CustomCollapse/CustomCollapse';

export default function ModelCard({ model }) {

  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const hasPhotos = _.size(model.zdjecia) > 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const title = 'Rozwiń sczegóły';

  return (
    <Grid component='li' item xs={12} sm={6} md={4} lg={2} className={classes.li}>
      <Card className={classes.root}>
        <CustomCardHeader model={model} />
        <Link href={`/${model.type}/${model.url}`} passHref>
          <a>
            <Image
              src={hasPhotos ? model.zdjecia[0].url : ''}
              aspectRatio={0.7}
              alt={hasPhotos ? model.zdjecia[0].alternativeText : ''}
              title={hasPhotos ? model.zdjecia[0].caption : ''}
              formats={hasPhotos ? model.zdjecia[0].formats : ''}
            />
          </a>
        </Link>

        <CustomActions
          handleExpandClick={handleExpandClick}
          expanded={expanded}
          title={title}
        />

        <CustomCollapse expanded={expanded}>
          <CustomCardContent model={model} />
        </CustomCollapse>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  li: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0 !important',
    }
  },
  actions: {
    marginTop: 'auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
