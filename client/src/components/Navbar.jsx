import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material/';
import { useNavigate  } from 'react-router-dom';
function Navbar({ signIn, logout, registerBusiness }) {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/registerBusiness');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BusinessBeacon
          </Typography>
          <Button color="inherit" onClick={handleClick}>{registerBusiness}</Button>
          
          <Button color="inherit">{logout}</Button>
          {
            signIn && <Button color="inherit">{signIn}</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
