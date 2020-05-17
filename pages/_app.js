import React, { useState } from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
import { lightTheme, darkTheme } from '../styles/themes';


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const newPageProps = {
    theme: theme,
    themeToggler: themeToggler,
    ...pageProps
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...newPageProps} />
    </ThemeProvider>
  );
}
