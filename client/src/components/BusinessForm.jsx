import React,{useState} from 'react';
import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerBusiness } from '../api/helper';
function BusinessForm() {
  const boxStyle = {
    width: 'auto',
    margin: '2rem',
  };
  const navigate=useNavigate();
  const [bName,setBName]=useState('');
  const [bLocation, setBLocation] = useState('');
  const [bPromotions,setBPromotions]=useState('');
  const [bType,setBType]=useState('');
  const [bPromotionPeriod,setBPromotionPeriod]=useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let isValid = true; 
  
    if (!Number.isInteger(Number(bPromotionPeriod)) && bPromotionPeriod !== "") {
      alert("For Promotion Period in hours, please enter a valid hour amount, only write numbers.");
      isValid = false; 
    }
  
    if (bName === "" || bLocation === "" || bPromotions === "" || bType === "") {
      alert('All fields are required');
      isValid = false; 
    }
  
    if (isValid) {
      registerBusiness({
        name: bName,
        location: bLocation,
        promotion: bPromotions,
        type: bType,
        promotionPeriod: bPromotionPeriod
      });
      setBName('');
      setBLocation('');
      setBPromotions('');
      setBType('');
      setBPromotionPeriod('');
      alert("Business succesfully registered");
      // navigate('/home');
    }
  };
  
  
  
  
  
  
  

  

  return (
    <Card sx={{ boxShadow: 1, borderRadius: 2.5, width: '575px' }}>
      <form //onSubmit={handleFormSubmit}
      >
      <Box>
        <Box sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            name='businessName'
            id="outlined-basic bname"
            label="Business Name"
            variant="outlined"
            fullWidth
            value={bName}
            onChange={(e)=>{setBName(e.target.value)}}
          />
        </Box>
        <Box sx={{ textAlign: 'center', ...boxStyle }}>
        <TextField
          id="outlined-basic blocation"
          label="Business Location"
          variant="outlined"
          fullWidth
          value={bLocation}
          onChange={(e) => {
            setBLocation(e.target.value);
            console.log("Updated bLocation:", e.target.value);
          }}
        />

        </Box>

        <Box sx={boxStyle}>
          <TextField
            id="outlined-multiline-flexible bpromotions"
            label="Promotions/Deals"
            placeholder="Describe your current deals and discounts"
            multiline
            minRows={5}
            maxRows={5}
            fullWidth
            value={bPromotions}
            onChange={(e)=>{setBPromotions(e.target.value)}}
          />
        </Box>

        <Box sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            name='businessPromotionPeriod'
            id="outlined-basic bname"
            label="Promotion Period in hours"
            variant="outlined"
            fullWidth
            value={bPromotionPeriod}
            onChange={(e)=>{setBPromotionPeriod(e.target.value)}}
          />
        </Box>

        <Box sx={boxStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of Business
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select bcategory"
              label="businesscategory"
              value={bType}
              onChange={(e) => setBType(e.target.value)}
              
            >
              <MenuItem value={'Bank'}>Bank</MenuItem>
              <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
              <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
              <MenuItem value={'Clothing'}>Clothing and Accessories</MenuItem>
              <MenuItem value={'Groceries'}>Grocery Store</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: 'auto', marginLeft: '2rem' }}>
          <Typography variant="caption" display="block" gutterBottom>
            By clicking below, I agree to the Terms of Use and that I have read
            the Privacy Statement.
          </Typography>
        </Box>

        <Box
          sx={{ marginLeft: '2rem', marginTop: '0.8rem', marginBottom: '2rem' }}
        >
          <Button variant="contained" onClick={handleFormSubmit}>Register</Button>
        </Box>
      </Box>
      </form>
    </Card>
  );
}

export default BusinessForm;
