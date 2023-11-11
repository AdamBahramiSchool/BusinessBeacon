import Navbar from "../components/Navbar.jsx"
import GoogleMaps from "../components/GoogleMaps.js"
import "../utils/Map.css"

function Home() {
  return (
    <div className="home-div">
      <Navbar pageType="home" registerBusiness="Register Business" />
      <GoogleMaps />
    </div>
  )
}

export default Home
