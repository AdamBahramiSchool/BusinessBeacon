// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkyuS7ym9IPFPJj_Xcg5Jn2C0trMio9VM",
  authDomain: "businessbeaconreal.firebaseapp.com",
  projectId: "businessbeaconreal",
  storageBucket: "businessbeaconreal.appspot.com",
  messagingSenderId: "156093053814",
  appId: "1:156093053814:web:a7805bebcd08325219d857",
  measurementId: "G-PNHL6MQJ1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);