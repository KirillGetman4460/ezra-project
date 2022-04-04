import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';
import {Provider} from 'react-redux';
import store from '../redux/store.js'
import '../styles/style.scss'
//import 'animate.css';
function App({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Head>
        <title>Ezra</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    pathname: ctx.pathname,
  },
});

export default App;


