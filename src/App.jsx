import React from 'react';
import { useCookies } from 'react-cookie'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Routes from './routes';
import Header from './pages/layouts/header';
import Footer from './pages/layouts/footer';

import LightTheme from './themes/light';
import DarkTheme from './themes/dark';

export default function App() {

  const [cookies] = useCookies(['mode']);

  return (
    <ThemeProvider theme={cookies.mode === 'dark' ? DarkTheme : LightTheme}>
      <CssBaseline/>
      <Header/>
      <Routes/>
      <Footer/>
    </ThemeProvider>
  );
}
