//import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
//import test from "../src/assets/taxprep.png"; // with import
//import taxcal from "../src/assets/taxcal.png"; // with import
import taxplan from "../src/assets/taxplanning.png"; // with import
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';

export default function BoxBasic() {
  return (
    
    <Box component="section" sx={{ border: 0, bgcolor:'#d2e8f340'}}>
      <Grid container spacing={0} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center'>
      <Grid size="grow">
      <h1 style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Georgia, serif', alignContent:'center' }}>
      Sharma Tax Advisors offers comprehensive tax services and tax planning, 
      in Canada and the United States. <br/>
      Let us help you maximize your benefits and simplify the tax process.</h1>
      </Grid></Grid>
      
      <Grid container spacing={0} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center'>
      
      
      <Grid size="auto">
      <Table sx={{ border: 0 }}><tr><td>
      <img src={taxplan}/>
      </td>
      </tr><tr><td>
      Tax Preparation
      </td>
      </tr>
      </Table>
      </Grid>

      <Grid size="auto">
      <Table><tr><td>
      <img src={taxplan}/>
      </td>
      </tr><tr><td>
      Tax Calculator
      </td>
      </tr>
      </Table>
      </Grid>

      <Grid size="auto">
      <Table><tr><td>
      <img src={taxplan}/>
      </td>
      </tr><tr><td>
      Tax Planning
      </td>
      </tr>
      </Table>
      </Grid>
      
      </Grid>
      <br/>
    </Box>
  );
}