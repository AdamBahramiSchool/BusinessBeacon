import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BusinessSignUp from "./pages/BusinessSignUp";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./pages/Protected";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

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
