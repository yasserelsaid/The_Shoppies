import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { darkTheme, lightTheme } from '../src/theme';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function MyApp(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { Component, pageProps } = props;

  useEffect(() => {
    const savedIsDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    if (savedIsDarkTheme !== null) setIsDarkTheme(savedIsDarkTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>The Shoppies</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} setIsDarkTheme={setIsDarkTheme} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
