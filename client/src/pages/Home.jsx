import React from 'react';
import Navbar from '../components/Navbar.jsx';
import GoogleMaps from '../components/GoogleMaps.js';
import { Typography } from '@mui/material';

function Home() {
  return (
    <div>
      <Navbar logout="Logout" registerBusiness="Register Business" />
      <Typography variant="h1">Home page</Typography>
      <GoogleMaps />
    </div>
  );
}
export default Home;
