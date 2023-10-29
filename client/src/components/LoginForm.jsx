import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button } from '@mui/material';
import app from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user !== null) {
        console.log('user: ', user);
        navigate('/home');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      // Handle errors here
    }
  };

  return (
    <div>
      <Button onClick={GoogleSignIn} variant="contained">
        Sign In with Google
      </Button>
    </div>
  );
}
