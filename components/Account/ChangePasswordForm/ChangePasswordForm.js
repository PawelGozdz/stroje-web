import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Typography, Grid, CardActionArea } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updatePasswordApi } from '../../../api/user';
import SendIcon from '@material-ui/icons/Send';
import { setToken } from '../../../api/token';

export default function ChangePasswordForm({ user, logout, setReloadUser }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData)
      setLoading(true);
      const response = await updatePasswordApi(user.id, formData, logout);

      if (response?.statusCode) {
        response?.messages.forEach(m => toast.error(m));
      } else {
        toast.success('Hasło zaktualizowane. Zaloguj się ponownie używając nowego hasła');
        logout();
      }
      setLoading(false);
    }
  });

  return (
    <Grid component='form' className={classes.form} onSubmit={formik.handleSubmit}>
      <Paper className={classes.paper} elevation={3}>
        <FormControl>
          <Typography className={classes.formHeader} variant='h5'>
            Zmień swoje hasło
          </Typography>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-password">Nowe hasło</InputLabel>
          <Input
            id="my-password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            error={!!formik.errors.password}
            value={formik.values.password}
            aria-describedby="Wpisz hasło" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-confirm-password">Potwierdź nowe hasło</InputLabel>
          <Input
            id="my-confirm-password"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            error={!!formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            aria-describedby="Potwierdź hasło" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-current-password">Obecne hasło</InputLabel>
          <Input
            id="my-current-password"
            name="passwordCurrent"
            type="password"
            onChange={formik.handleChange}
            error={!!formik.errors.passwordCurrent}
            value={formik.values.passwordCurrent}
            aria-describedby="Obecne hasło" />
        </FormControl>

        <FormControl >
          <Button endIcon={<SendIcon />} className={classes.buttons} type="submit" disabled={!formik.isValid} variant="contained" >
            Zmień
          </Button>
        </FormControl>
      </Paper>

    </Grid>
  )
}

function initialValues() {
  return {
    password: '',
    confirmPassword: '',
    passwordCurrent: ''
  }
}

function validationSchema() {
  return {
    password: Yup.string().required(true).oneOf([Yup.ref('confirmPassword')], true),
    confirmPassword: Yup.string().required(true).oneOf([Yup.ref('password')], 'Powtórz nowe hasło'),
    passwordCurrent: Yup.string().required(true)
  }
}

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow'
  },
  buttons: {
    backgroundColor: theme.palette.grey[200],
    alignSelf: 'flex-start'
  },
  formHeader: {
    color: theme.palette.grey[400],
    // ...theme.section.header
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    '& > * ': {
      marginBottom: theme.spacing(2)
    }
  }
}));
