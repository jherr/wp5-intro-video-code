import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const images = [
  'https://secure-images.nike.com/is/image/DotCom/865831_850',
  'https://secure-images.nike.com/is/image/DotCom/BV8049_010',
  'https://secure-images.nike.com/is/image/DotCom/CD6309_011',
  'https://secure-images.nike.com/is/image/DotCom/CK0556_010',
];

export default () => (
  <Grid container>
    {images.map(img => (
      <Grid
        item
        sm={3}
        key={img}
        style={{
          padding: '0.5em'
        }}
      >
        <img
          src={img}
          style={{
            maxWidth: '100%',
          }}
        />
        <Typography variant="h5">
          A Product
        </Typography>
        <Typography variant="h6">
          $60
        </Typography>
      </Grid>
    ))}
  </Grid>
);
