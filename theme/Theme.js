import { createTheme } from '@mui/material/styles';
import { deepPurple, blueGrey, grey, lightBlue, blue, yellow, green, red, orange } from '@mui/material/colors';

const ongPrimary = '#2196F3';
const ongSecondary = '#EC407A';
const black = '#000000';
const white = '#ffffff';
const mainBlack = '#424242';

const defaultTheme = createTheme();

export default createTheme({
  props: {
    MuiLink: {
      underline: 'always',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          color: grey[800]
        },
      },
    },
  },
  palette: {
    common: {
      primary: {
        main: `${ongPrimary}`
      },
      secondary: {
        main: `${ongSecondary}`
      },
      bg: {
        blue,
        yellow,
        green,
        red,
        orange
      }
    }
  },
  typography: {
    tab: {
      color: 'red'
    },
    'h1': {
      color: ongPrimary,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.5rem',
      }
    },
    'h2': {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      }
    },
    'h3': {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.4rem',
      }
    },
    'h4': {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      }
    },
    'h5': {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 860,
      lg: 1200,
      xl: 1720,
    }
  },
  customButtons: {
    primary: formatButtons(lightBlue[500]),
    secondary: formatButtons(ongSecondary),
    white: formatButtons(grey[50])
  },
  sections: {
    section: {
      [defaultTheme.breakpoints.down('sm')]: {
        padding: defaultTheme.spacing(2, 0),
      },
      padding: defaultTheme.spacing(4, 0),
    },
    header: {
      color: defaultTheme.palette.grey[600],
      margin: defaultTheme.spacing(2, 0)
    }
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [defaultTheme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
});

function formatButtons(backgroundColor) {
  return {
    backgroundColor,
    textDecoration: 'none',
    padding: '.5rem',
    borderRadius: '2px',
    boxShadow: defaultTheme.shadows[4],
    transition: defaultTheme.transitions.create('transform', {
      duration: defaultTheme.transitions.duration.shortest,
    }),
    '& > a': {
      color: white
    },
    '&:hover': {
      boxShadow: defaultTheme.shadows[6],
      transform: 'translateY(-1px)'
    },
    '&:active': {
      transform: 'translateY(0px)'
    },
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    }
  }
}
