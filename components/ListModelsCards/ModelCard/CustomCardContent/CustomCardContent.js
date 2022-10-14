import { makeStyles } from '@mui/styles';
import { Typography, Box, Divider, CardContent } from '@mui/material';
import Link from 'next/link';

import SizeList from '../../../SizeList';
import IconTypeList from '../../../IconTypeList';

export default function CustomCardContent({ model }) {
  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent}>
      {_.size(model.opis) > 0 && (
        <>
          <Typography className={classes.opisContent}>
            {model.opis}
          </Typography>
          <Divider />
        </>
      )}

      {_.size(model.parts) > 0 && (
        <>
          <Box className={classes.container}>
            <Typography className={classes.opisContent}>
              Elementy stroju:
            </Typography>

            <IconTypeList model={model} />
          </Box>
          <Divider />
        </>
      )}

      {_.size(model.sizes) > 0 && (
        <Box className={classes.container}>
          <Typography className={classes.opisContent}>
            Dostępne rozmiary:
          </Typography>
          <SizeList model={model} />
        </Box>
      )}

      <Box className={classes.container}>
        <Typography className={classes.opisContent}>
          <Link href={`/${model.type}/${model.url}`} passHref>
            <a className={classes.link}>Czytaj więcej...</a>
          </Link>
        </Typography>
      </Box>
    </CardContent >
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  },
  opisContent: {
    color: theme.palette.grey[600],
    fontSize: '.9rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'underline',
    color: theme.palette.common.secondary.main
  }
}));
