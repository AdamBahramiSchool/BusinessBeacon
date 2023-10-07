import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';

function Landing() {
  return (
    <div>
      <Navbar signIn="Sign In" />
      <Typography variant="h1">Landing page</Typography>
    </div>
  );
}

export default Landing;
