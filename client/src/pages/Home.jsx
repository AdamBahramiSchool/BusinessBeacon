import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';

function Home() {
  return (
    <div>
      <Navbar pageType="Logout" />
      <Typography variant="h1">Home page</Typography>
    </div>
  );
}
export default Home;
