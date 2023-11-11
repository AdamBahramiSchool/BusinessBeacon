import { keyframes } from "@mui/system";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const landingStyles = {
  container: {
    marginTop: 4,
    textAlign: "center",
  },
  pageWrapper: {
    backgroundColor: "white",
    width: "100%",
    height: "200vh",
    backgroundColor: "#ffff",
  },
  paper: {
    padding: 7,
    height: "30vh",
    width: "100%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://static.vecteezy.com/system/resources/previews/027/660/549/original/light-blue-cityscape-background-city-buildings-with-bridge-and-ferris-wheel-modern-architectural-panorama-in-flat-style-illustration-horizontal-wallpaper-vector.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    animation: `${gradientAnimation} 10s ease infinite`,
    position: "relative",
    marginTop: "100px",
  },
  slogan: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: 4,
  },
  sectionTitle1: {
    WebkitTextStroke: "1px #084b8e",
    fontFamily: "Monaco, monospace",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: 10,
    color: "black", // Change color as desired
  },
  sectionTitle2: {
    WebkitTextStroke: "1px #084b8e",
    fontFamily: "Monaco, monospace",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: 5,
    color: "black",
  },
  sectionContent: {
    fontSize: "1rem",
    margin: "1.5rem 0",
    WebkitTextStroke: "1px #084b8e",
    fontFamily: "Monaco, monospace",
    color: "black",
  },
  button: {
    marginTop: 2,
    padding: "10px 30px",
    fontSize: "1rem",
  },
};

export default landingStyles;
