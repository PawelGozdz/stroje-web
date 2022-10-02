import React from 'react';
import { makeStyles } from '@mui/styles';
import PhoneIcon from '@mui/icons-material/Phone';

import { Box, Typography } from '@mui/material';
import * as _ from 'lodash';

import { defaultPrize } from '../../../../utils/constants';
import ElementIcon from '../../../CustomIcons/ElementIcon';
import ModelSizesAccordion from '../../ModelAccordion';
import { CONTACT_PHONES } from '../../../../utils/constants'

export default function ModelDescription({ model, pageSettings, globalSettings: { settings } }) {
  const classes = useStyles();

  // cena_promo > cena_modelu > cena_globalna

  const settingPrice = 'price.price';
  const price = model.cena || settings.find(s => s.__component === settingPrice && s.name?.toLowerCase() === model.type?.toLowerCase())?.price || null;

  return (
    <Box
      className={classes.info}
    >
      <Typography variant='h4' component='h3'>
        {model.tytul}
      </Typography>

      {model.opis && <Description opis={model.opis} />}

      {typeof price === 'number' && <Price price={price} />}
      <Colors colors={model.colors} />

      {_.size(model.parts) > 0 && <Parts parts={model.parts} />}

      {/* <Costumes costumes={model.costumes} /> */}

      <ProductId id={model.id} />

      <ContactButtons costumes={model.costumes} />
    </Box>
  )
}

const ProductId = ({ id }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.header}>Kod produktu:
        <Typography variant='span' className={classes.id}>
          {` ` + id}
        </Typography>
      </Typography>
    </Box>
  );
}

const ContactButtons = ({ costumes }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>

      {_.size(costumes) > 0 ? (
        <Typography className={classes.header}>Zarezerwuj</Typography>
      ) : (
        <Typography className={classes.header}>Więcej informacji pod numerem:</Typography>
      )}
      <Box className={classes.buttonGroup}>
        {_.map(CONTACT_PHONES, phone => (
          <a href={`tel:${phone}`} key={phone} className={classes.phone}>
            <PhoneIcon />{phone}
          </a>
        ))}
      </Box>
      {/* <Typography paragraph className={classes.contact}>
      </Typography> */}
    </Box>
  );
};

const Price = ({ price }) => {
  const classes = useStyles();

  const number = _
    .isNumber(price)
    ? Number(price).toFixed(2)
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
          <Typography className={classes.headerFalse}>Zapytaj o dostępność telefonicznie</Typography>
        ) : (
          <Typography className={classes.headerTrue}>
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
            REZERWACJE <span className={classes.reservationInfoMessage}>(***Kliknij w link z rozmiarem aby sprapwdzić dostępność)</span>
          </Typography>
        </>
      )}
    </>
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
  id: {
    color: theme.palette.common.primary.main,
    fontSize: '1.75rem',
  },
  headerFalse: {
    fontWeight: 'bolder',
    color: theme.palette.common.secondary.main,
    marginTop: theme.spacing(3)
  },
  headerTrue: {
    fontWeight: 'bolder',
    color: `${theme.palette.common.primary.main} !important`
  },
  paragraph: {
    color: theme.palette.grey[600],
    flex: 1
  },
  contact: {
    fontWeight: 'bold',
    display: 'block'
  },
  content: {
    display: 'flex',
    fleDirection: 'column',
    // alignItems: 'center'
  },
  sizesContent: {
    display: 'flex',
    fleDirection: 'row',
    [theme.breakpoints.only('xs')]: {
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
  },
  phone: {
    ...theme.customButtons.secondary,
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.common.secondary.main,
    color: theme.palette.grey[50],
    marginRight: theme.spacing(1),
    fontSize: '12px !important',
    '&:not(:first-of-type)': {
      marginRight: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '14px !important',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '16px !important',
    },
  },
  buttonGroup: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      '& > *': {
        marginTop: theme.spacing(1)
      },
    },
  }
}));
