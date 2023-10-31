import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import landingStyles from '../components/landingStyles.jsx';
import LoginForm from '../components/LoginForm.jsx';

function Login() {
  return (
    <div>
      <Navbar pageType="landing" />
      <div style={{ height: "80vh", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
        <Container maxWidth="sm" sx={landingStyles.container}>
          <Paper sx={{ ...landingStyles.paper, marginTop: "-4rem" }}> 
            <Typography variant="h4" style={{ marginBottom: "3rem", fontSize: '2rem', 
            fontWeight: 'bold' }}>Sign-in with Google</Typography>
            <LoginForm />
          </Paper>
        </Container>
        
      </div>
    </div>
  );
}

export default Login; 