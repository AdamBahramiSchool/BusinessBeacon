import React from 'react';
import Navbar from '../components/Navbar.jsx';
import BusinessForm from '../components/BusinessForm.jsx'; // Correct import statement
import { Box, Paper } from '@mui/material';
import landingStyles from '../components/landingStyles.jsx';

function BusinessSignUp() {
  return (
    <div>
      <Navbar logout="Logout" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Paper sx={landingStyles.paper}>
          <BusinessForm />
        </Paper>
      </Box>
    </div>
  );
}

export default BusinessSignUp;
