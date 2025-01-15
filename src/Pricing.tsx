import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';



  

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: 'none'}}>
        <Card>
        <Grid size={4} alignSelf='center' alignContent='center' textAlign='center' bgcolor="#d2e8f340">
          

<h2 style={{ fontSize: 20, fontWeight: 6, fontFamily:'Georgia, serif', color: 'Black' }}>

Contact us for pricing (info@sharmataxadvisors.com) <br/><br/>
<b>Personal tax filing as low as 49 CAD</b>

</h2>
      


</Grid>
</Card>
    </Box>
  );
}




