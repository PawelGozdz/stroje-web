import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Typography, Grid, CardActionArea } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateUserApi } from '../../../api/user';
import SendIcon from '@material-ui/icons/Send';
import { setToken } from '../../../api/token';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateUserApi(user.id, { email: formData.email }, logout);

      if (response?.messages) {
        response?.messages.forEach(m => toast.error(m));
      } else {
        setToken(response?.accessToken);
        setReloadUser(true);
        toast.success('Email zaktualizowany!');
        formik.handleReset();
      }
      setLoading(false);
    }
  });

  return (
    <Grid component='form' className={classes.form} onSubmit={formik.handleSubmit}>
      <Paper className={classes.paper} elevation={3}>
        <FormControl>
          <Typography className={classes.formHeader} variant='h5'>
            Zmień swój email <span>(Twój aktualny email: {user.email})</span>
          </Typography>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-email">Email</InputLabel>
          <Input
            id="my-email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            error={!!formik.errors.email}
            value={formik.values.email}
            aria-describedby="Wpisz email" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-confirm-email">Potwierdź Email</InputLabel>
          <Input
            id="my-confirm-email"
            name="confirmEmail"
            type="email"
            onChange={formik.handleChange}
            error={!!formik.errors.confirmEmail}
            value={formik.values.confirmEmail}
            aria-describedby="Potwierdź email" />
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
    email: '',
    confirmEmail: ''
  }
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true).oneOf([Yup.ref('confirmEmail')], true),
    confirmEmail: Yup.string().email(true).required(true).oneOf([Yup.ref('email')], 'Email w obydwu polach musi być taki sam')
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
