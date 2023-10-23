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

function BusinessForm() {
  const boxStyle = {
    width: 'auto',
    margin: '2rem',
  };

  return (
    <Card sx={{ boxShadow: 1, borderRadius: 2.5, width: '575px' }}>
      <Box>
        <Box sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            id="outlined-basic"
            label="Business Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ textAlign: 'center', ...boxStyle }}>
          <TextField
            id="outlined-basic"
            label="Business Location"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box sx={boxStyle}>
          <TextField
            id="outlined-multiline-flexible"
            label="Promotions/Deals"
            placeholder="Describe your current deals and discounts"
            multiline
            minRows={5}
            maxRows={5}
            fullWidth
          />
        </Box>

        <Box sx={boxStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of Business
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="businesscategory"
            >
              <MenuItem value={'bank'}>Bank</MenuItem>
              <MenuItem value={'restaurant'}>Restaurant</MenuItem>
              <MenuItem value={'entertainment'}>Entertainment</MenuItem>
              <MenuItem value={'Clothing'}>Clothing and Accessories</MenuItem>
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
          <Button variant="contained">Register</Button>
        </Box>
      </Box>
    </Card>
  );
}

export default BusinessForm;
