import Navbar from '../components/Navbar.jsx';
import GoogleMaps from '../components/GoogleMaps.js';

function Home() {
  return (
    <div>
      <Navbar pageType="home" registerBusiness="Register Business" />
      <GoogleMaps />
    </div>
  );
}

export default Home;


