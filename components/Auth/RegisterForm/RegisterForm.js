import React, { useState } from 'react'
import { useFormik } from 'formik';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { registerApi, resetPasswordApi } from '../../../api/user';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Typography } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';

export default function RegisterForm({ showLoginForm }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await registerApi(formData);

      if (response?.accessToken) {
        showLoginForm();
        toast.success('Możesz się teraz zalogować');
      }

      if (response?.messages.length > 0) {
        response.messages.forEach(m => toast.error(m));
      }

      setLoading(false);
    }
  });


  return (
    <Paper component='form' className={classes.loginForm} onSubmit={formik.handleSubmit}>

      <FormControl>
        <Typography className={classes.formHeader} variant='h4'>Rejestracja</Typography>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Imię</InputLabel>
        <Input
          id="my-input"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.firstName}
          aria-describedby="Podaj imię" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Nazwisko</InputLabel>
        <Input
          id="my-input"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.lastName}
          aria-describedby="Podaj Nazwosko" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          id="my-input"
          name="email"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.email}
          aria-describedby="Wpisz email" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Hasło</InputLabel>
        <Input
          id="my-input"
          name="password"
          type="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          aria-describedby="Wpisz hasło" />
        <FormHelperText id="my-helper-text">Wpisz hasło, które zapamiętasz</FormHelperText>
      </FormControl>

      <FormControl className={classes.buttons}>
        <Button endIcon={<SendIcon />} className={classes.submit} type="submit" disabled={!formik.isValid} variant="contained" color="secondary">
          Zarejestruj
        </Button>
      </FormControl>
      <Button type="button" className={classes.changeAction} onClick={showLoginForm} variant="contained" color="primary">
        Masz już konto? Zaloguj się
      </Button>
    </Paper>
  )

}

function initialValues() {
  return {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    firstName: Yup.string().min(2, 'Nie mniej niż 2 znaki').max(20, 'Nie więcej niż 20 znaków').required(true),
    lastName: Yup.string().min(2, 'Nie mniej niż 2 znaki').max(20, 'Nie więcej niż 20 znaków').required(true),
  }
}

const useStyles = makeStyles(theme => ({
  loginForm: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    minWidth: '21rem',
    border: '5px solid white'
  },
  formHeader: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    '& button': {
      marginLeft: 0
    }
  },
  submit: {

  },
  changeAction: {
    marginTop: theme.spacing(3),
    fontSize: '.65rem'
  }
}));
