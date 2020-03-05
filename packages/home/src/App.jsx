import React from 'react';
import { Container, Typography, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

import Header from 'nav/Header';

import ProductCarousel from './ProductCarousel';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <CssBaseline />
        <Header />
        <Typography variant="h3">Home Page</Typography>
        <ProductCarousel />
      </Container>
    </ThemeProvider>
  );
}

export default App;
