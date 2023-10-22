import React from "react"
import Navbar from "../components/Navbar.jsx"
import GoogleMaps from "../components/GoogleMaps.js"
import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';

function Home() {
  return (
    <div>
      <Navbar logout="Logout" registerBusiness="Register Business"/>
      <Typography variant="h1">Home page</Typography>
      <GoogleMaps />
    </div>
  )
}
export default Home;
