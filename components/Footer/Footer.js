import { makeStyles } from '@mui/styles';
import { Container, Divider } from '@mui/material';
import * as _ from 'lodash';
import { useAppContext } from '../../context/StateContext';
import Address from './Address';
import Categories from './Categories';
import Partners from './Partners';

export default function Footer() {
  const classes = useStyles();

  const footerMenu = [
    { title: 'Kategorie', values: useAppContext().categories },
    {
      title: 'Kontakt',
      values: {
        phones: ['788 479 789'],
        email: 'agencja-reklamowa-impuls@wp.pl',
        address: { street: 'ul. Owocowa 3', postCode: '27-200', city: 'Starachowice' }
      }
    },
    {
      title: 'Partnerzy',
      values: [
        {
          title: 'Agencja Reklamowa Impuls', url: 'http://arimpuls.pl/'
        }, {
          title: 'Opieka Nad Grobami', url: 'http://opieka-nad-grobami.com/'
        }
      ]
    },
  ];

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Categories categories={footerMenu[0]} />
      <Divider className={classes.divider} orientation="vertical" variant="middle" flexItem />
      <Address address={footerMenu[1]} />
      <Divider className={classes.divider} orientation="vertical" variant="middle" flexItem />
      <Partners partners={footerMenu[2]} />
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    ...theme.container,
    paddingTop: `${theme.spacing(3)}`,
    paddingBottom: `${theme.spacing(3)}`,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'baseline',
    },
    '& > *': {
      marginTop: theme.spacing(3)
    },
    '& h4': {
      fontSize: '1.4rem',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        fontSize: '1.6rem',
      }
    },
    '& ul': {
      marginLeft: 0,
      paddingLeft: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
      },
      '& > *': {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          justifyContent: 'flex-start',
        }
      },
      '&:not(:last-child)': {
        marginRight: theme.spacing(4)
      }
    }
  },
  divider: {
    display: 'none',
    background: `${theme.palette.grey[50]} !important`,
    width: '1px',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
  }
}));
