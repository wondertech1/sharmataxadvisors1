//import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';



  

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: 'none'}}>
        <Card>
        <Grid size={4} alignSelf='center' alignContent='center' textAlign='center' bgcolor="#d2e8f340">
          

<h2 style={{ fontSize: 20, fontWeight: 6, fontFamily:'Georgia, serif', color: 'Black' }}>At <b>Sharma Tax Advisors (STA)</b>, we are dedicated to providing expert tax services tailored to meet the unique needs of our
clients. We believe that understanding and managing your tax responsibilities is not just about
compliance— it&#39;s about empowering you to make informed financial decisions.<br/><br/>

<b>Our focus is clear - </b> to develop a tax plan that effectively meets our clients’ needs while simplifying
the tax preparation process. We ensure that our clients maximize your deductions and remain
compliant with all applicable laws. <br/><br/>Whether you are an individual seeking assistance with personal
taxes or a business looking for strategic tax planning, we are here to help you achieve your financial
goals with confidence and peace of mind. With a commitment to personalized service and a focus on
building lasting relationships, <br/><br/><b>STA is your trusted tax ally in all things tax-related. Let’s work together
to achieve your financial aspirations!</b></h2>
      


</Grid>
</Card>
    </Box>
  );
}