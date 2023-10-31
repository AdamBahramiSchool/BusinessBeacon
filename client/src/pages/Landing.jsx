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
          
          <Typography variant="h4" sx={landingStyles.sectionTitle1}>
            About Us
          </Typography>
          <Typography sx={landingStyles.sectionContent}>
          Business Beacon is a user-friendly web application connecting business owners and regular users in a dynamic, location-based ecosystem. It caters to the unique needs of each user type. For business owners, it offers a platform to promote deals and offers to a local audience, while regular users can discover nearby businesses, events, and activities with discounts. The map provides directions and real-time transportation times.

          Customer Benefits:

          Business Owners:

          Promote deals to a local audience.
          Register services and manage campaigns efficiently.
          Regular Users:

          Discover nearby businesses and events with discounts.
          Access information about businesses and real-time transportation times.
          Competitive Landscape:

          Business Beacon distinguishes itself by focusing on small businesses. It provides real-time analytics for business owners, the option to team up with friends for promotions, and inclusivity for any business type. This unique approach sets Business Beacon apart, giving small businesses a chance to grow in the market.
          </Typography>

          
          <Typography variant="h4" sx={landingStyles.sectionTitle2}>
            Why Us
          </Typography>
          <Typography sx={landingStyles.sectionContent}>
            <strong>For Business Owners:</strong>
            BusinessBeacon helps entrepreneurs to effortlessly promote time-limited deals
            to a niche local audience. By registering services, businesses appear as beacons on
            our real-time map, and it serves as a way to advertise to local people and to people
            interested in the businesses' services. It offers campaign management and
            performance tracking for efficient marketing.
            <br /><br />
            <strong>For Regular Users:</strong>
            For everyday consumers, BusinessBeacon is a resource to discover nearby
            businesses, events, and activities with discounts and services. [Insert the details here]
          </Typography>
        </Paper>
      </Container>
    </PageWrapper>
  );
}

export default Landing;
