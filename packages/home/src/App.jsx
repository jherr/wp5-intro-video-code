import React from 'react';
import {
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
  Paper,
  Grid,
  makeStyles
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

import Header from 'nav/Header';

import ProductCarousel from './ProductCarousel';

const useStyles = makeStyles(() => ({
  media: {
    maxHeight: 200
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    margin: '0.5em'
  },
  heroText: {
    padding: '0.5em'
  },
  carouselContainer: {
    marginTop: '1em'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <CssBaseline />
        <Header />
        <Typography variant="h3">Home Page</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.hero}>
              <img src="/fruit/mango.jpg" className={classes.media} />
              <div className={classes.heroText}>
                <Typography variant="h4">
                   Mango
                </Typography>
                <Typography variant="body1">
                  A mango is a juicy stone fruit (drupe) produced from
                  numerous species of tropical trees belonging to the
                  flowering plant genus Mangifera, cultivated mostly for
                  their edible fruit.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.hero}>
              <img src="/fruit/peach.jpg" className={classes.media} />
              <div className={classes.heroText}>
                <Typography variant="h4">
                   Peach
                </Typography>
                <Typography variant="body1">
                  The peach (Prunus persica) is a deciduous tree native
                  to the region of Northwest China between the Tarim Basin 
                  and the north slopes of the Kunlun Mountains, where it 
                  was first domesticated and cultivated. It bears an 
                  edible juicy fruit called a peach or a nectarine.
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={classes.carouselContainer}>
          <ProductCarousel />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
