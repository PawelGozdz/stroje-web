import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as _ from 'lodash';

export default function TopBar({ menu }) {
  const classes = useStyles();

  const indexPageItem = _.head(_.filter(menu, { url: '' }));
  const searchPageItem = _.head(_.filter(menu, { url: 'wyszukaj' }));

  return (
    <>
      <Logo indexPage={indexPageItem} />
      {/* <Box component='div' className={classes.searchLink} >
        <Link href={`/wyszukaj`} passHref>
          <a className={classes.centreIcon}><SearchIcon className={classes.searchIcon} /> {searchPageItem.item}</a>
        </Link>
      </Box> */}
    </>
  );
}

function Logo({ indexPage }) {
  const classes = useStyles();
  return (
    <Link href={`/${indexPage.url}`} passHref>
      <a>
        <img src='/LOGO.svg' alt='Site Logo' title='Wypożyczalnia strojów karnawałowych' className={classes.logo} />
      </a>
    </Link>
  );
}

const useStyles = makeStyles(theme => ({
  searchLink: {
    ...theme.customButtons.primary,
    marginLeft: theme.spacing(5),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginRight: 'auto'
    }
  },
  searchIcon: {
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '5.4rem',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '6.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '7.2rem',
    },
    // boxShadow: theme.shadows[3, 6]
  },
  centreIcon: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  }
}));
