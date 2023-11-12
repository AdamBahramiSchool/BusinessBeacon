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

  button: {
    marginTop: 2,
    padding: "5px 15px",
    fontSize: "1rem",
  },
};

export default landingStyles;
