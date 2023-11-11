import React from "react";
// import { Typography, Container, Paper, Button } from "@mui/material"
// import Navbar from "../components/Navbar.jsx"
// import PageWrapper from "../components/PageWrapper.jsx"
// import landingStyles from "../components/landingStyles.jsx"
import { useNavigate } from "react-router-dom";
import "../utils/Landing.css";
import splashImage from "../utils/SplashPageImg.png";
import SplashImg2 from "../utils/SplashImg2.png";
import ForBusiness from "../utils/ForBusiness.png";
import ForConsumer from "../utils/ForConsumer.png";

import NavBar2 from "../components/Navbar2.jsx";
import Footer from "../components/Footer.jsx";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar2 />
      <div className="body-container">
        <div className="level-one">
          <div className="left-one">
            <img
              src={splashImage}
              alt="an illustration of people driving"
              className="splash-page-img"
            />
          </div>
          <div className="right-one">
            <h1>Bridging businesses and consumers.</h1>
            <h1>One deal at a time.</h1>
            <div
              className="landing-button button-1"
              onClick={() => navigate("/login")}
            >
              Get Started
            </div>
          </div>
        </div>
        <div className="level-two">
          <div className="left-two">
            <h1>
              User-focused. <span>Business-friendly.</span>
            </h1>

            <h2>
              Unmatched savings for our users. Unrivalled exposure for the
              companies that keep our community thriving.
            </h2>
            <div
              className="landing-button button-2"
              onClick={() => navigate("/about-us")}
            >
              Learn more
            </div>
          </div>
          <div className="right-two">
            <img
              src={SplashImg2}
              alt="an illustration Business Beacon on a laptop"
              className="splash-page-img"
            />
          </div>
        </div>
        <div className="level-three">
          <div className="attic" id="how-it-works">
            <h1>How It Works</h1>
          </div>
          <div className="level-three-body">
            <div className="left-three level-three-headers">
              <img src={ForConsumer} alt="an illustration of consumers" />
              <h2>For Consumers</h2>
              <p>
                BusinessBeacon is the consumer's best resource for discovering
                nearby sales, events, and activities.
              </p>
            </div>
            <div className="right-three level-three-headers">
              <img src={ForBusiness} alt="an illustration of consumers" />
              <h2>For Businesses</h2>
              <p>
                Register your business and get the tools you need to
                effortlessly promote time-limited deals to a niche local
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
