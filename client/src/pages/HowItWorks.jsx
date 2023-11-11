import React from "react"
import { useNavigate } from "react-router-dom"
import "../utils/Landing.css"
import NavBar2 from "../components/Navbar2"
import Footer from "../components/Footer"
import ForBusiness from "../utils/ForBusiness.png"
import ForConsumer from "../utils/ForConsumer.png"

function HowItWorks() {
  const navigate = useNavigate()
  return (
    <>
      <NavBar2 />
      <div className="body-container">
        <div className="level-three">
          <div className="attic" id="how-it-works">
            <h1>How It Works</h1>
          </div>
          <div className="level-three-body">
            <div className="left-three level-three-headers">
              <img src={ForConsumer} alt="an illustration of consumers" />
              <h2>For Consumers</h2>
              <p>BusinessBeacon is the consumer's best resource for discovering nearby sales, events, and activities.</p>
            </div>
            <div className="right-three level-three-headers">
              <img src={ForBusiness} alt="an illustration of consumers" />
              <h2>For Businesses</h2>
              <p>Register your business and get the tools you need to effortlessly promote time-limited deals to a niche local audience.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HowItWorks
