import React from 'react';
import {
  Grid
} from '@material-ui/core';

import fruit from './fruit';
import ProductCard from './ProductCard';

export default () => (
  <Grid container>
    {fruit.slice(0, 4).map((product) => (
      <Grid item sm={3} key={product.name}>
        <ProductCard {...product} />
      </Grid>
    ))}
  </Grid>
);
