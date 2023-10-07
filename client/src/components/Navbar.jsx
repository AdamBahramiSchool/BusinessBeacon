import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material/';

function Navbar({ pageType }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BusinessBeacon!
          </Typography>
          <Button color="inherit">{pageType}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
