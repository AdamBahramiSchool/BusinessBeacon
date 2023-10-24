import React from 'react';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import LoginForm from  '../components/LoginForm.jsx'
function Login() {
  return (
    <div>
      <Navbar />
      <Typography variant="h1">Login page</Typography>
      <LoginForm />
    </div>
  );
}

export default Login;
