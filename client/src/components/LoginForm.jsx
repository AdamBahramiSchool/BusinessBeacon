import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@mui/material";
import app from "../api/firebase";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function LoginForm() {
  const navigate = useNavigate();

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user !== null) {
        console.log("user: ", user);
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      // Handle errors here
    }
  };

  return (
    <div>
    
      <IconButton onClick={GoogleSignIn} color="primary" aria-label="Sign In with Google">
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '30px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
      <img src="/images/google-logo.png" alt="Sign In with Google" style={{ width: '75px' }} />
      <span style={{ marginLeft: '8px' }}>Continue With Google</span>
      </div>
      </IconButton>
      
     

    </div>
  );
}
