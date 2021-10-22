import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Typography, Grid, CardActionArea } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateUserApi } from '../../../api/user';
import SendIcon from '@material-ui/icons/Send';

export default function ChangeNameForm({ user, logout, setReloadUser }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateUserApi(user.id, formData, logout);

      if (!response || response?.statusCode) {
        response?.messages.forEach(m => toast.error(m));
      } else {
        setReloadUser(true);
        toast.success('Dane zaktualizowano!');
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
            Zmień swoje dane osobowe <span>(Twoj dane: {user.firstName} {user.lastName})</span>
          </Typography>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-firstName">Imię</InputLabel>
          <Input
            id="my-firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            error={!!formik.errors.firstName}
            value={formik.values.firstName}
            aria-describedby="Wpisz imię" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-lastName">Wpisz nazwisko</InputLabel>
          <Input
            id="my-lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            error={!!formik.errors.lastName}
            value={formik.values.lastName}
            aria-describedby="Wpisz nazwisko" />
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

function initialValues(user) {
  return {
    firstName: '',
    lastName: ''
  }
}

function validationSchema() {
  return {
    firstName: Yup.string().required(true),
    lastName: Yup.string().required(true)
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
