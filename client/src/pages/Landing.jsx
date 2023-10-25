import React from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import landingStyles from '../components/landingStyles.jsx';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  return (
    <PageWrapper style={landingStyles.pageWrapper}>
      <Navbar pageType="landing" />
      <Container maxWidth="sm" sx={landingStyles.container}>
        <Paper sx={landingStyles.paper}>
          <Typography variant="h1" sx={landingStyles.slogan}>
            BusinessBeacon: Bridging Businesses and Consumers, One Deal at a
            Time!
          </Typography>
          <Button
            onClick={() => navigate('/login')}
            variant="contained"
            color="primary"
            sx={landingStyles.button}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </PageWrapper>
  );
}

export default Landing;
