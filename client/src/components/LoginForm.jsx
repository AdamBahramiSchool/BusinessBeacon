import React, { useState } from 'react'; // Import useState from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import app from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user !== null) {
          console.log(user);
          navigate('/home');
        } else {
          navigate('/login');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
      });
  }

  return (
    <div>
      <Button onClick={GoogleSignIn} variant="contained">Sign In with Google</Button>
    </div>
  );
}
