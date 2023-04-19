import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Fighter Jet Inspection Tracker
        </Typography>
        <Button href="/login" color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
