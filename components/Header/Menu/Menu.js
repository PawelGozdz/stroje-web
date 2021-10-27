import React from 'react';
import Link from 'next/link';
import { makeStyles, useTheme } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useMediaQuery, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Menu({ menu }) {
  const theme = useTheme();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const anchor = 'right';

  return (
    <Box>
      <MenuDrawer anchor={anchor} classes={classes} toggleDrawer={toggleDrawer} state={state}>
        <Typography className={classes.listHeader} variant="h6">Strony</Typography>
        <MenuList menu={menu} />
        <Divider />

        <Typography className={classes.listHeader} variant="h6">Partnerzy</Typography>
        <PartnersList />

      </MenuDrawer>
    </Box>
  );
}

const MenuDrawer = ({ children, classes, anchor, toggleDrawer, state }) => {
  return (
    <Box component='div' className={classes.root}>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </Box>
  );
};

const MenuList = ({ noIcon = false, classes, menu }) => {
  return (
    <List className={classes ? classes.servicesListTopBar : ''}>
      {menu.map(item => (
        <MenuItem noIcon={noIcon} item={item} key={item.url} />
      ))}
    </List>
  );
};

const MenuItem = ({ item, noIcon }) => {
  return (
    <Link href={`/${item.url}`} passHref>
      <ListItem button component="a">
        {!noIcon ? <ListItemIcon><PlaylistAddCheckIcon /> </ListItemIcon> : ''}
        <ListItemText>{item.item}</ListItemText>
      </ListItem>
    </Link>
  );
};

const PartnersList = () => {
  return (
    <List>
      <Link href="http://arimpuls.pl/" passHref>
        <ListItem button component="a" target="_blank">
          <ListItemIcon><InboxIcon /> </ListItemIcon>
          <ListItemText>Agencja Impuls</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};


const useStyles = makeStyles(theme => ({
  list: {
    width: '400px',
    background: 'tomato'
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto'
    }
  },
  fullList: {
    width: 'auto',
    marginTop: theme.spacing(3),
    fontWeight: 'bold'
  },
  authList: {},
  userDetails: {
    marginLeft: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.85rem'
    }
  },
  userStyles: {
    display: 'inline-block',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  servicesListTopBar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing(3),
  },
  listHeader: {
    marginLeft: theme.spacing(1)
  }
}));
