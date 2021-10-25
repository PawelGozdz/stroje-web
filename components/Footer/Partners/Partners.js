import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import * as _ from 'lodash';
import Link from 'next/link';

export default function Partners({ partners }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography component='h4'>{partners.title}</Typography>
      <Box component='ul' className={classes.list}>
        {_.map(partners.values, p => <Partner key={p.url} partner={p} />)}
      </Box>
    </Box>
  );
}

const Partner = ({ partner }) => {
  const classes = useStyles();

  return (
    <Box component='li' >

      <Link href={`${partner.url}`} passHref>
        <a className={classes.link} target="_blank">{partner.title}</a>
      </Link>

    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    alignItems: 'center',
  },
  container: {
    ...theme.container
  },
  link: {
    textDecoration: 'underline'
  }
}));
