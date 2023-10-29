import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import BusinessSignUp from './pages/BusinessSignUp';
import { AuthContext } from './Context/AuthContext';
import { Protected } from './pages/Protected';

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route
          path="home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="registerBusiness"
          element={
            <Protected>
              <BusinessSignUp />
            </Protected>
          }
        />
      </Routes>
    </AuthContext>
  );
}

export default App;
