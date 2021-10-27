import React, { useState } from 'react';
import Link from 'next/link';
import { Grid, Typography, Box } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from '../../Image';
import * as _ from 'lodash';
import CustomCardHeader from './CustomCardHeader';
import CustomCardContent from './CustomCardContent';

export default function ModelCard({ model }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const hasPhotos = _.size(model.zdjecia) > 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid component='li' item xs={12} sm={6} md={4} lg={2} className={classes.li}>
      <Card className={classes.root}>
        <CustomCardHeader model={model} />
        <Link href={`/${model.url}`} passHref>
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
        />

        <CustomCollapse expanded={expanded}>
          <CustomCardContent model={model} />
        </CustomCollapse>
      </Card>
    </Grid>
  );
}

const CustomCollapse = ({ expanded, children }) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      {_.size(children) > 0 && children}
    </Collapse>
  );
};

const CustomActions = ({ handleExpandClick, expanded }) => {
  const classes = useStyles();

  return (
    <CardActions disableSpacing className={classes.actions}>
      <Typography variant="body2" color="textSecondary" component="p">
        Rozwiń sczegóły
      </Typography>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  );
};

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
