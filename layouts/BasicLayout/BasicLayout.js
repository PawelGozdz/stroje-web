import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function BasicLayout({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.app}>
      <Box component='header' className={classes.topBar}>
        <Header />
      </Box>

      <Box component='main'>
        {children}
      </Box>

      <Box component='footer' className={classes.footer}>
        <Footer />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box'
  },
  topBar: {
    width: '100%',
    boxShadow: theme.shadows[4]
  },
  footer: {
    width: '100%',
    boxShadow: theme.shadows[4],
    marginTop: 'auto'
  },
  main: {
    flex: 1,
    maxWidth: '100%'
  },
}));
