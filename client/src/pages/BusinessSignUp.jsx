import React from 'react';
import Navbar from '../components/Navbar.jsx';
import BusinessForm from '../components/BusinessForm.jsx'; // Correct import statement

function BusinessSignUp() {
  return (
    <div>
      <Navbar logout="Logout" />
      <BusinessForm />
    </div>
  );
}

export default BusinessSignUp;
