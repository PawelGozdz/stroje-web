import React, { useEffect } from 'react';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-day-picker/lib/style.css';

import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { AppWrapper } from '../context/StateContext';
import theme from '../theme';

export default function MyApp({ Component, pageProps }) {

  function componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />

      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        // hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}
