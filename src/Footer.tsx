//import * as React from 'react';
import Box from '@mui/material/Box';
import SocialMedia from "./SocialMedia";



import Grid from '@mui/material/Grid2';





export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: 'none',  bgcolor: "#063970" }} justifyContent="center"
    alignItems="center">
        
    <Box sx={{ flexGrow: 1,bgcolor: "#063970"  }} justifyContent="center" alignItems="center">
      <Grid container spacing={2} bgcolor="#063970">

        <Grid size={{ xs: 4, md: 6 }} bgcolor="#063970">
         <center><b></b></center>
        </Grid>

        <Grid size={{ xs: 4, md: 6 }}>
        <center><b></b></center>
        </Grid>
    </Grid>


    <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 6, md: 8 }} alignItems="center" justifyContent="center">
        <br/><br/>
          <center><SocialMedia /></center><br/><br/>
          <center><text style={{ color: 'white' }}>Sharma Tax Advisors | CPA CANADA | CPA USA  | Charted Accountant (India) |Copyright 2025 | All Rights Reserved <br/><br/></text></center>
        </Grid>
        </Grid>
        
      
    </Box>
    </Box>
  );
}