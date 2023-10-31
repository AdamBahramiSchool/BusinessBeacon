import React from 'react';
import Navbar from '../components/Navbar.jsx';
import BusinessForm from '../components/BusinessForm.jsx';
import { Box, Paper } from '@mui/material';
import businessStyles from '../components/businessStyles.jsx';

function BusinessSignUp() {
  return (
    <div>
      <Navbar pageType="home" />
      <Box
        style={businessStyles.container}
      >
        <Paper style={businessStyles.paper}>
          <BusinessForm />
        </Paper>
      </Box>
    </div>
  );
}

export default BusinessSignUp;
