import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box, Typography, Button } from '@mui/material';
import * as _ from 'lodash';

import { defaultPrize } from '../../../../utils/constants';
import ElementIcon from '../../../CustomIcons/ElementIcon';
import ModelSizesAccordion from '../../ModelAccordion';

export default function ModelDescription({ model }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.info}
    >
      <Typography variant='h4' component='h3'>
        {model.tytul}
      </Typography>

      {model.opis && <Description opis={model.opis} />}

      <Price prize={model.cena} />
      <Colors colors={model.colors} />

      {_.size(model.parts) > 0 && <Parts parts={model.parts} />}

      <Costumes costumes={model.costumes} />


      <ContactButtons />
    </Box>
  )
}

const ContactButtons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Zarezerwuj</Typography>
      <Typography paragraph className={classes.paragraph}>510510510</Typography>
    </Box>
  );
};

const Price = (prize) => {
  const classes = useStyles();

  const number = _
    .isNumber(prize)
    ? Number(prize).toFixed(2)
    : Number(defaultPrize).toFixed(2);

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Cena:</Typography>
      <Typography paragraph className={classes.paragraph}>{number}{' zł'}</Typography>
    </Box>
  );
};

const Description = ({ opis }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Opis:</Typography>
      <Typography paragraph className={classes.paragraph}>{opis}</Typography>
    </Box>
  );
};

const Colors = ({ colors }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Główne kolory stroju:</Typography>
      <Typography paragraph className={classes.paragraph}>
        {_.size(colors) > 0 ? (
          _.map(colors, c => _.lowerFirst(c.kolor)).join(', ')
        ) : <span>wielokolorowe</span>}
      </Typography>
    </Box>
  );
};

const Parts = ({ parts }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Elementy stroju:</Typography>
      <Box className={classes.paragraph}>
        {_.map(parts, part => (
          <ElementIcon
            title={part.tytul}
            url={part.url}
            key={part.url}
          />
        ))}
      </Box>
    </Box>
  );
};

const Costumes = ({ costumes }) => {
  const classes = useStyles();

  const sortedCostumes = _.sortBy(costumes, 'tytul');
  const many = _.size(sortedCostumes);

  return (
    <>
      <Box className={classes.content}>
        {many === 0 ? (
          <Typography className={classes.header__false}>Zapytaj o dostępność telefonicznie lub mailowo</Typography>
        ) : (
          <Typography className={classes.header__true}>
            Strój dostępny w ilości: {many} <br />
          </Typography>
        )}
      </Box>
      {many > 0 && (
        <>
          <Box className={classes.sizesContent}>
            <Typography className={classes.header}>Rozmiary:</Typography>

            <ModelSizesAccordion costumes={sortedCostumes} />

          </Box>
          <Typography className={classes.header} paragraph>
            REZERWACJE <span className={classes.reservationInfoMessage}>(***Kliknij w link z rozmiarem aby strapwdzić dostępność)</span>
          </Typography>
        </>
      )}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  section: {
    ...theme.sections.section,
    // background: 'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );',
    alignItems: 'center',
  },
  container: {
    ...theme.container
  },
  info: {
    flex: 1,
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(1.3)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1)
    }
  },
  header: {
    marginRight: theme.spacing(1.5),
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  header__false: {
    fontWeight: 'bolder',
    color: 'tomato !important'
  },
  header__true: {
    fontWeight: 'bolder',
    color: `${theme.palette.common.primary.main} !important`
  },
  paragraph: {
    color: theme.palette.grey[600],
    flex: 1
  },
  content: {
    display: 'flex',
    fleDirection: 'column'
  },
  sizesContent: {
    display: 'flex',
    fleDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      flexBasis: 'auto',
    }

  },
  size__text: {
    marginBottom: '.25rem'
  },
  sizes: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonSizes: {
    textDecoration: 'underline'
  },
  reservationInfo: {
    fontSize: '.75rem',
  },
  reservationInfoMessage: {
    fontSize: '.65rem',
    color: theme.palette.grey[600],

  }
}));
