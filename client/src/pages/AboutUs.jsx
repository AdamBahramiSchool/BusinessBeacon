import React from "react"
import { useNavigate } from "react-router-dom"
import "../utils/Landing.css"
import Logo from "../utils/Logo.png"
import NavBar2 from "../components/Navbar2.jsx"
import Footer from "../components/Footer.jsx"
import "../utils/Landing.css"

function AboutUs() {
  return (
    <>
      <NavBar2 />
      <div className="body-container">
        <div className="about-level-one">
          <h1>About Us</h1>
          <p>
            Business Beacon is a user-friendly web application connecting business owners and regular users in a dynamic, location-based ecosystem. <br />
            <br />
            It caters to the unique needs of each user type. For business owners, it offers a platform to promote deals and offers to a local audience, while regular users can discover nearby businesses, events, and activities with discounts. The map provides directions and real-time transportation times
          </p>
          <div className="about-us-spread">
            <div className="spread">
              <h2>Business Owners:</h2>
              <p>Promote deals to a local audience. Register services and manage campaigns efficiently.</p>
            </div>
            <div className="spread">
              <h2>Regular Users:</h2>
              <p>Discover nearby businesses and events with discounts. Access information about businesses and real-time transportation times.</p>
            </div>
          </div>
          <div className="about-ending">
            <h2>Competitive Landscape:</h2>
            <p>Business Beacon distinguishes itself by focusing on small businesses. It provides real-time analytics for business owners, the option to team up with friends for promotions, and inclusivity for any business type. This unique approach sets Business Beacon apart, giving small businesses a chance to grow in the market.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
