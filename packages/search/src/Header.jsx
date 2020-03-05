import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Header
      </Typography>
    </Toolbar>
  </AppBar>
);
