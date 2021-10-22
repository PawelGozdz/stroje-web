import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Paper, FormControl, Input, InputLabel, FormHelperText, Typography, Grid, CardActionArea } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateUserApi } from '../../../api/user';
import SendIcon from '@material-ui/icons/Send';

export default function ChangePhoneForm({ user, logout, setReloadUser }) {
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
            {user && user.phone
              ? <>Zmień swój numer telefonu <span>(Twoj numer telefonu: {user.phone})</span></>
              : <>Czy chcesz dodać numer telefonu?</>
            }
          </Typography>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-phone">Phone</InputLabel>
          <Input
            id="my-phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            error={!!formik.errors.phone}
            value={formik.values.phone}
            aria-describedby="Wpisz numer telefonu" />
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
    phone: ''
  }
}

function validationSchema() {
  return {
    phone: Yup.string().nullable(true)
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
