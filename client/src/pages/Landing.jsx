import React from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import landingStyles from '../components/landingStyles.jsx';

function Landing() {
  return (
    <PageWrapper style={landingStyles.pageWrapper}>
      <Navbar pageType="Sign In" />
      <Container maxWidth="sm" sx={landingStyles.container}>
        <Paper sx={landingStyles.paper}>
          <Typography variant="h1" sx={landingStyles.slogan}>
            BusinessBeacon: Bridging Businesses and Consumers, One Deal at a
            Time!
          </Typography>
          <Button variant="contained" color="primary" sx={landingStyles.button}>
            Get Started
          </Button>
        </Paper>
      </Container>
    </PageWrapper>
  );
}

export default Landing;
