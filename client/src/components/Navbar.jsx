import { Fragment } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleSignOut } from '../api/helper';

function Navbar({ pageType }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBusinessBeaconClick = () => {
    if (
      location.pathname === '/registerBusiness' ||
      location.pathname === '/home'
    ) {
      navigate('/home');
    } else navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ marginRight: '5px', width: '40px', height: 'auto' }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: '32px',
              textShadow: '2px 2px 4px #084b8e',
              WebkitTextStroke: '1px #084b8e',
              textStroke: '1px #084b8e',
              color: '#fff',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={handleBusinessBeaconClick}
          >
            BusinessBeacon
          </Typography>
          {pageType === 'landing' && (
            <Fragment>
              <Button
                color="inherit"
                sx={{ position: 'absolute', right: '115px' }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{ position: 'absolute', right: '200px' }}
              >
                Why Us
              </Button>
            </Fragment>
          )}

          {pageType === 'home' && (
            <Fragment>
              <Button
                onClick={handleSignOut}
                color="inherit"
                sx={{ position: 'absolute', right: '50px' }}
              >
                Sign Out
              </Button>
              <Button
                onClick={() => navigate('/registerBusiness')}
                color="inherit"
                sx={{ position: 'absolute', right: '150px' }}
              >
                Register Your Business
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
