import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default ({ name, image, price }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h6">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};
