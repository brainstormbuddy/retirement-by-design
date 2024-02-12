// import '../styles/globals.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  Palette,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

declare module '@mui/material/styles' {
  interface Theme {
    palette: Palette;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    //@ts-ignore
    palette?: PaletteOptions | undefined;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#202D40',
    },
    secondary: {
      main: '#2C3573',
    },
    info: {
      main: '#C5B050',
    },
    text: {
      secondary: '#9b9b9b',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('206504551364270'); // facebookPixelId
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      //@ts-ignore
      document.body.classList.remove('js-nav-menu-open');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/LeMondeCourrier-Normal.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/LeMondeCourrier-Bold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
