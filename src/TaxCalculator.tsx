//import * as React from 'react';
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


  
export default function FunctionLabel() {

    const [W2Income, setW2Income] = useState('');
    const [W2withholding, setW2withholding] = useState('');
    const [gains, setgains] = useState('');
    const [losses, setlosses] = useState('');

    const handleClick = () => {
        //const data = 'Appointment';
        //onButtonClicked(data);
        //const input = document.getElementById("w2Income");
        alert('W2Income'+W2Income +'W2withholding'+ W2withholding +'gains'+gains+'losses'+losses);
      };

  return (
    <Box>
        <br/><br/><br/><br/><br/>
    <Grid container spacing={10} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center' overflow="hidden">
    
    <Grid size="auto" overflow="hidden">
    <br/>
        <TextField
          required
          id="state"
          label="State"
          //defaultValue="State"
        /> <br/><br/>
        <TextField
          required
          id="w2Income"
          label="Total Income on W2"
          onChange={e=>setW2Income(e.target.value)}
          //defaultValue="Total Income on W2"
        /> <br/><br/>
        <TextField required
          id="outlined-password-input"
          label="w2withholding"
          onChange={e=>setW2withholding(e.target.value)}
          autoComplete="current-password"
        /><br/><br/>
        <TextField required
          id="dependent"
          label="Dependents"
          //defaultValue="Dependents"
          slotProps={{
            input: {
              readOnly: false,
            },
          }}
        /><br/><br/>
        <TextField required
          id="gains"
          label="Capital Gains"
          onChange={e=>setgains(e.target.value)}
          autoComplete="current-password"
        /><br/><br/>
        <TextField required
          id="loss"
          label="Capital Loss"
          onChange={e=>setlosses(e.target.value)}
          autoComplete="current-password"
        />
        <br/><br/><br/><br/>
        
    </Grid>
    <Grid size="auto" overflow="hidden">
    <br/>
        <TextField
          required
          id="state"
          label="State"
          //defaultValue="State"
        /> <br/><br/>
        <TextField
          required
          id="w2Income2"
          label="Total Income on W2"
          //defaultValue="Total Income on W2"
        /> <br/><br/>
        <TextField required
          id="outlined-password-input"
          label="w2withholding"
          autoComplete="current-password"
        /><br/><br/>
        <TextField required
          id="dependent"
          label="Dependents"
          //defaultValue="Dependents"
          slotProps={{
            input: {
              readOnly: false,
            },
          }}
        /><br/><br/>
        <TextField required
          id="gains"
          label="Capital Gains"
          autoComplete="current-password"
        /><br/><br/>
        <Button variant="contained" size="large" onClick={handleClick}>Calculate Tax</Button><br/><br/>
        <br/><br/>
    </Grid>
    
    <Grid size="auto" overflow="hidden">
    <BarChart
      {...props}
      series={[
        { data: [100], label: 'Federal Tax' },
        { data: [10], label: 'State Tax'  },
      ]}
    />
    </Grid>
    
    
    </Grid>
    
    
    </Box>
  );
}

const props = {
  width: 500,
  height: 500,
  xAxis: [{ data: ['A'], scaleType: 'band' as const }],
};




