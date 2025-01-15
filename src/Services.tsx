import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';



  

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: 'none'}}>
        <Card>
        <Grid size={4} alignSelf='center' alignContent='center' textAlign='center' bgcolor="#d2e8f340">
          

<h2 style={{ fontSize: 20, fontWeight: 6, fontFamily:'Georgia, serif', color: 'Black' }}>

<b>Personal tax </b><br/><br/>
<b>Corporate tax</b><br/><br/>
<b>Business tax</b><br/><br/>
<b>Tax advisory</b><br/><br/>
<b>Immigration and emigration tax returns</b><br/><br/>
<b>Cross border tax services</b><br/><br/>
<b>Company formation support</b><br/><br/>
<b>CRA audits</b>

</h2>
      


</Grid>
</Card>
    </Box>
  );
}




