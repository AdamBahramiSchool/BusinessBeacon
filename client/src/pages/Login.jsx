import React from "react"
import { Typography, Container, Paper } from "@mui/material"
import Navbar from "../components/Navbar.jsx"
import landingStyles from "../components/landingStyles.jsx"
import LoginForm from "../components/LoginForm.jsx"
import NavBar2 from "../components/Navbar2.jsx"
import Footer from "../components/Footer.jsx"

function Login() {
  return (
    <div>
      <NavBar2 />
      <div style={{ height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Container maxWidth="sm" sx={landingStyles.container}>
          <Paper sx={{ ...landingStyles.paper, marginTop: "-4rem" }}>
            <Typography variant="h4" style={{ marginBottom: "3rem", fontSize: "2rem", fontWeight: "bold" }}>
            </Typography>

            <LoginForm />
          </Paper>
          <div style={{ margin: "2rem 0", fontFamily: "'Roboto', sans-serif" }}>Click the Google logo to login.</div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Login; 
