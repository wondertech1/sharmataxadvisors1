//import * as React from 'react';
import Box from '@mui/material/Box';
import SocialMedia from "./SocialMedia";



import Grid from '@mui/material/Grid2';





export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey',  bgcolor: "#063970" }} justifyContent="center"
    alignItems="center">
        
    <Box sx={{ flexGrow: 1,bgcolor: "#063970"  }} justifyContent="center"
  alignItems="center">
      <Grid container spacing={2} bgcolor="#063970">

        <Grid size={{ xs: 4, md: 6 }} bgcolor="#063970">
          Sharma Tax Advisors
        </Grid>

        <Grid size={{ xs: 4, md: 6 }}>
          Specialization
        </Grid>
    </Grid>


    <Grid container spacing={2} alignItems="center"
  justifyContent="center">
        <Grid size={{ xs: 6, md: 8 }} alignItems="center"
  justifyContent="center">
          <SocialMedia />
          Sharma Tax Advisors | CPA CANADA | CPA USA  | Charted Accountant |Copyright 2022 | All Rights Reserved
        </Grid>
        </Grid>
        
      
    </Box>
    </Box>
  );
}