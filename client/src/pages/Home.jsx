import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import GoogleMaps from '../components/GoogleMaps.js';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = location.state?.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Navbar pageType="home" registerBusiness="Register Business" />
      <GoogleMaps />
    </div>
  );
}

export default Home;
