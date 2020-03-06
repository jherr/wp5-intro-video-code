import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';

import Header from 'nav/Header';

function App() {
  return (
    <Container fixed>
      <CssBaseline />
      <Header />
      <Typography variant="h3">
        Search Page
      </Typography>
    </Container>
  );
}

export default App;
