// functions for helping with auth state changes
import { signOut, getAuth } from 'firebase/auth';

export async function handleSignOut() {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
