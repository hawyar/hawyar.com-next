import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { Normalize } from 'styled-normalize';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
