// functions for helping with auth state changes and firestore
import { signOut, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import app from './firebase';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function handleSignOut() {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}

export async function registerBusiness({ name, location, promotion, type,promotionPeriod }) {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'businesses'), {
    name,
    location,
    promotion,
    type,
    promotionPeriod
  });
  console.log('Document written with ID: ', docRef.id);
}

export async function getAllBusinesses() {
  const querySnapshot = await getDocs(collection(db, 'businesses'));
  const businesses = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    businesses.push(doc.data());
  });
  return businesses;
}
