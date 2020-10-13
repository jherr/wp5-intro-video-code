import React, { useState } from 'react';
import { Container, Typography, CssBaseline, Button, TextField, Grid } from '@material-ui/core';

import Header from 'nav/Header';
import fruit from 'home/fruit';
import ProductCard from 'home/ProductCard';
const ProductCarousel = React.lazy(() => import('home/ProductCarousel'));

function App() {
  const [ shown, setShown ] = useState(false);
  const [ filter, setFilter ] = useState('');
  return (
    <Container fixed>
      <CssBaseline />
      <Header />
      <Typography variant="h3">
        Search Page
      </Typography>
      <TextField
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <Grid container>
        {
          fruit
            .filter(({name}) => name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
            .map(fruit => (
              <Grid item xs={4}>
                <ProductCard {...fruit} />
              </Grid>
            ))
        }
      </Grid>
      {shown && 
        <React.Suspense fallback={null}>
          <ProductCarousel />
        </React.Suspense>
      }
      {!shown && 
        <Button
          onClick={() => setShown(true)}
        >
          Show Carousel
        </Button>
      }
    </Container>
  );
}

export default App;
