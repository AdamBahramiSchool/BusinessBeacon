import React from "react"

import landingStyles from "../components/landingStyles.jsx"
import { useNavigate } from "react-router-dom"
import "../utils/Landing.css"

import Header from "../components/Navbar2.jsx"

function NavBar2() {
  const navigate = useNavigate()
  return (
    <div className="static-header">
      <h1 onClick={() => navigate("/")}>BusinessBeacon</h1>
      <div className="nav-item nav-item-1" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="nav-item nav-item-1" onClick={() => navigate("/login")}>
        Login
      </div>
      <div className="nav-item nav-item-2" onClick={() => navigate("/about-us")}>
        About Us
      </div>
      <div className="nav-item nav-item-3" onClick={() => navigate("/how-it-works")}>
        How it Works
      </div>
    </div>
  )
}

export default NavBar2
