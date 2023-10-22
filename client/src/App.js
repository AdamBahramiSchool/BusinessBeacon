import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import './pages/BusinessSignUp'
import BusinessSignUp from './pages/BusinessSignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="registerBusiness" element={<BusinessSignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
