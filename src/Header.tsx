//import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: 'none' }}>
        <Typography>

<h1 style={{ color: '#063970' }}> Sharma Tax Advisors 
 <br/>Expertise You Can Count On, Solutions You Can Trust<br/></h1>
 <h2>Tax Preparation, Tax Planning and Business Advice For Candada & USA</h2>

 <Button variant="contained" size="large">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Book Appointment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 </Button>

 <img src={'../taxreturn.webp'} />



  
 </Typography>
    </Box>
  );
}