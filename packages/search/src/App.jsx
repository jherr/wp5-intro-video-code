import React, { useState } from 'react';
import { Container, Typography, CssBaseline, Button } from '@material-ui/core';

import Header from './Header';

const ProductCarousel = React.lazy(() => import('home/ProductCarousel'));

function App() {
  const [shown, setShown] = useState(false);

  return (
    <Container fixed>
      <CssBaseline />
      <Header />
      <Typography variant="h3">Search Page</Typography>
      {shown && (
        <React.Suspense fallback={null}>
          <ProductCarousel />
        </React.Suspense>
      )}
      <Button variant="contained" color="primary" onClick={() => setShown(true)}>Show Carousel</Button>
    </Container>
  );
}

export default App;
