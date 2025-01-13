//import * as React from 'react';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//import test from "../src/assets/Tax4.png"; // with import
//import { styled } from '@mui/material/styles';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';




export default function BoxBasic() {
  return (

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignContent='center' justifyContent='center'>
        
        
        <Grid size="grow" alignSelf='center' alignContent='center' textAlign='center'>
          <br/><br/>
 <h1 style={{ fontSize: 40, fontWeight: 900, fontFamily: 'Bradley Hand, cursive', alignContent:'center' }} >Expertise You Can Count On, Solutions You Can Trust</h1>
 <h2 style={{ fontSize: 20, fontWeight: 6, fontFamily:'Georgia, serif' }}>Tax Preparation, Tax Planning and Business Advice For Candada & USA</h2>

 <Button variant="contained" size="large">
 Book Appointment 
 </Button><br/><br/><br/>
        </Grid>
      </Grid>
      <br/>
    </Box>







  );
}