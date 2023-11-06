import Navbar from '../components/Navbar.jsx';
import GoogleMaps from '../components/GoogleMaps.js';
import { CssBaseline, Grid } from '@mui/material/';

function Home() {
  // return (
  //   <div>
  //     <Navbar pageType="home" registerBusiness="Register Business" />
  //     <GoogleMaps />
  //   </div>
  // );

  return (
        <>
            {/* <CssBaseline /> */}   
                   
            <Navbar pageType="home" registerBusiness="Register Business" />
            
            <div style={{display: "flex", flexDirection: "row", height: "100%", width: "100%", justifyContents: "center", alignItems: "center"}}>
              
              <div style={{height:"100%", width: "40%", backgroundColor: "white", zIndex: "2"}}>
              Deals
              </div>
              
              <GoogleMaps/> 
              
            </div>

            
            {/* <Grid container spacing={3} style={ {width: '100%'} }>
                <Grid item xs={12} md={4}>
                    
                </Grid>
                <Grid item xs={12} md={8}>
                    <GoogleMaps
		                />   
                </Grid>
            </Grid> */}
        </>
    );
}

export default Home;


