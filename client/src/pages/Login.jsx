import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import LoginForm from '../components/LoginForm.jsx';
function Login() {
  return (
    <div>
      <Navbar pageType="landing" />
      <div style={{ height: "80vh", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
        <Typography variant="h1" style={{marginBottom: "3rem"}}>Login page</Typography>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
