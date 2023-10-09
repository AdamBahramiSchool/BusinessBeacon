import React from "react"
// import { Typography } from "@mui/material"
import Navbar from "../components/Navbar.jsx"
import GoogleMaps from "../components/GoogleMaps.js"

function Home() {
  return (
    <div>
      <Navbar pageType="Logout" />
      {/* <Typography variant="h1">Home page</Typography> */}
      <GoogleMaps />
    </div>
  )
}
export default Home
