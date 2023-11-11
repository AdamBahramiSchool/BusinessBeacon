import Logo from "../utils/Logo.png"
import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer-container">
      <div className="footer-banner">
        <div className="credits">
          <p>Image & Illustration Credits</p>
          <p>
            storyset
            <br />
            redgreystock
            <br />
            pch.vector
            <br />
            vectorjuice
            <br /> <a href="https://www.freepik.com/">https://www.freepik.com/</a>
          </p>
        </div>
        <div className="useful-links">
          <p>Useful Links</p>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about-us")}>About Us</p>
          <p onClick={() => navigate("/login")}>Get Started</p>
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="the BusinessBeacon Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
