//import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function FunctionLabel() {
  return (
    <Box>
    <Grid container spacing={10} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center' overflow="hidden">
    <Grid size="auto" overflow="hidden">
    <BarChart
      {...props}
      series={[
        { data: [100], label: 'Federal Tax' },
        { data: [10], label: 'State Tax'  },
      ]}
    />
    </Grid>
    
    <Grid size="auto" overflow="hidden">
    <br/>
        <TextField
          required
          id="outlined-required"
          label="State"
          //defaultValue="State"
        /> <br/><br/>
        <TextField
          required
          id="outlined-disabled"
          label="Total Income on W2"
          //defaultValue="Total Income on W2"
        /> <br/><br/>
        <TextField required
          id="outlined-password-input"
          label="Withholding on W2"
          autoComplete="current-password"
        /><br/><br/>
        <TextField required
          id="outlined-read-only-input"
          label="Dependents"
          //defaultValue="Dependents"
          slotProps={{
            input: {
              readOnly: false,
            },
          }}
        /><br/><br/>
        <TextField required
          id="outlined-password-input"
          label="Capital Gains"
          autoComplete="current-password"
        /><br/><br/>
        <TextField required
          id="outlined-password-input"
          label="Capital Loss"
          autoComplete="current-password"
        />
        <br/><br/><br/><br/>
        
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




