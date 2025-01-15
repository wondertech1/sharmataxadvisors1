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

Email address : info@sharmataxadvisors.com <br/><br/>
Phone number : +1 437-997-8694 , +1 437-240-8584

</h2>
      


</Grid>
</Card>
    </Box>
  );
}