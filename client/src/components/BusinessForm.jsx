import React, { useState } from 'react';
import { TextField } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BusinessForm() {
  const [businessCategory, setBusinessCategory] = React.useState('');
  const handleChange = (event) => {
    setBusinessCategory(event.target.value);
  };

  const boxStyle = {
    width: '300px',
    margin: '1.5rem',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        mt: '3rem',
      }}
    >
      <Box>
        <Box className="bn_container" sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            id="outlined-basic"
            label="Business Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className="bl_container" sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            id="outlined-basic"
            label="Business Location"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box className="bc_container" sx={boxStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of Business
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={businessCategory}
              label="businesscategory"
              onChange={handleChange}
            >
              <MenuItem value={'bank'}>Bank</MenuItem>
              <MenuItem value={'restaurant'}>Restaurant</MenuItem>
              <MenuItem value={'entertainment'}>Entertainment</MenuItem>
              <MenuItem value={'Clothing'}>Clothing and Accessories</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className="pd_container" sx={boxStyle}>
          <TextField
            id="outlined-basic"
            label="Promotions/Deals"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box className="operationhours_container" sx={boxStyle}>
          <TextField
            id="outlined-basic"
            label="Operation Hours"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessForm;
