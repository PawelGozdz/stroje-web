import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import { loginApi, resetPasswordApi } from '../../../api/user';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@material-ui/icons/Send';


export default function LoginForm({ showRegisterForm, onCloseModal }) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);

      if (response?.accessToken) {
        login(response.accessToken);
        toast.success('Logowanie zakończone sukcesem!');
        onCloseModal();
      }

      if (response?.messages.length > 0) {
        response.messages.forEach(m => toast.error(m));
      }

      setLoading(false);
    }
  });

  const resetPassword = () => {
    formik.setErrors({});
    const validateEmail = Yup.string().email().required();

    if (validateEmail.isValidSync(formik.values.email)) {
      resetPasswordApi(formik.values.email);
    } else {
      formik.setErrors({ email: true });
    }
  };

  return (
    <Paper component='form' className={classes.loginForm} onSubmit={formik.handleSubmit}>

      <FormControl>
        <Typography className={classes.formHeader} variant='h4'>Logowanie</Typography>
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
          Zaloguj
        </Button>
        {/* <Button type="button" onClick={resetPassword}>
          Nie pamiętasz hasła?
      </Button> */}
      </FormControl>
      <Button type="button" className={classes.changeAction} onClick={showRegisterForm} variant="contained" color="primary">
        Nie masz jeszcze konta? Zarejestruj się
      </Button>
    </Paper>
  )

}

function initialValues() {
  return {
    email: '',
    password: ''
  }
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
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