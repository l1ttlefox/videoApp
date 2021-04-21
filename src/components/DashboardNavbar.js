import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar
} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Clock from './dashboard/Clock';

const DashboardNavbar = ({ ...rest }) => (
  <AppBar
    elevation={0}
    {...rest}
  >
    <Toolbar>
      <RouterLink to="/">
        <Typography color="white" variant="h6" pr={2}>
          MAIN
        </Typography>
      </RouterLink>
      <RouterLink to="/app/discover">
        <Typography color="white" variant="h6">
          DISCOVER
        </Typography>
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <Clock />
      </Box>
    </Toolbar>
  </AppBar>
);

export default DashboardNavbar;
