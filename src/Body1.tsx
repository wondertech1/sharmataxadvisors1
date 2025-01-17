
//import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
//import test from "../src/assets/taxprep.png"; // with import
//import taxcal from "../src/assets/taxcal.png"; // with import
//import taxplan from "../src/assets/taxplanning.png"; // with import
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const sample = [1, 10, 30, 50, 70, 90, 100];

const props = {
  width: 300,
  height: 300,
  xAxis: [{ data: ['A'], scaleType: 'band' as const }],
};



const BoxBasic = ({ onButtonClicked2 }:{onButtonClicked2:any})=>{
  const handleClick1 = () => {
    const data = 'Appointment';
    onButtonClicked2(data);
  };
  const handleClick2 = () => {
    const data = 'TaxCalculator';
    onButtonClicked2(data);
  };
  const handleClick3 = () => {
    const data = 'Appointment';
    onButtonClicked2(data);
  };
  return (
    
    <Box component="section" sx={{ border: 0, bgcolor:'#d2e8f340' }}>
      <Grid container spacing={0} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center' overflow="hidden">
      <Grid size="grow" overflow="hidden">
      <h1 style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Georgia, serif', alignContent:'center' }}>
      Sharma Tax Advisors offers comprehensive tax services and tax planning, 
      in Canada and the United States. <br/>
      Let us help you maximize your benefits and simplify the tax process.</h1>
      </Grid></Grid>
      
      <Grid container spacing={0} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center' overflow="hidden">
      
      
      <Grid size="auto" overflow="hidden">
      <Table sx={{ border: 0 }}><tr><td>
      <PieChart
      {...props}
      series={[
        {
          data: [
            { id: 0, value: 10 },
            { id: 1, value: 15,},
            { id: 2, value: 20,},
          ],
          type: 'pie',
          arcLabel: 'label',
        },
      ]}
    />
    <Button variant="contained" size="large" onClick={handleClick1}>Tax Preparation</Button>
      </td>
      </tr>
      </Table>
      </Grid>

      <Grid size="auto" overflow="hidden">
      <Table><tr><td>
      <BarChart
            {...props}
            series={[
              { data: [2400], label: 'Federal Tax' },
              { data: [500], label: 'State Tax'  },
            ]}
          />
           <Button variant="contained" size="large" onClick={handleClick2}>Tax Calculator</Button>
      </td>
     
      </tr>
      </Table>
      </Grid>

      <Grid size="auto" overflow="hidden">
      <Table><tr><td>
      
      <LineChart
        xAxis={[{ data: sample }]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear' },
          { id: 'logAxis', scaleType: 'log' },
        ]}
        series={[
          { yAxisId: 'linearAxis', data: sample, label: 'linear' },
          { yAxisId: 'logAxis', data: sample, label: 'log' },
        ]}
        leftAxis="linearAxis"
        rightAxis="logAxis"
        height={300}
        width={400}
      />
      <Button variant="contained" size="large" onClick={handleClick3}>Tax Planning</Button>
      
      </td>
      </tr>
      </Table>
      </Grid>
      
      </Grid>
      <br/>
    </Box>
  );
};
export default BoxBasic;
