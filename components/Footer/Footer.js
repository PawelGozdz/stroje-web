import { makeStyles, useTheme } from '@mui/styles';
import { Container, AppBar, Toolbar, Grid, Avatar, Box, Typography } from '@mui/material';

export default function Footer() {
  const classes = useStyles()();

  return (
    <Box component='footer' className={classes.footer}>
      <Typography component='p'>Wypożyczalnia strojów karnawałowych</Typography>
    </Box>
  )
}

function useStyles() {
  return makeStyles(theme => ({
    footer: {
      minHeight: '4rem;',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: theme.spacing(0)
    }
  }));
};
