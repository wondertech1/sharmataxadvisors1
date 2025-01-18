//import * as React from 'react';
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


  
export default function FunctionLabel() {

    const [W2Income, setW2Income] = useState('');
    const [W2withholding, setW2withholding] = useState('');
    const [gains, setgains] = useState('');
    const [losses, setlosses] = useState('');
    const [data1, setdata1] = useState(0);
    const [data2, setdata2] = useState(0);
    const [data3, setdata3] = useState(0);
    const [data4, setdata4] = useState(0);
    const [Fedstatus, setFedstatus] = useState('');
    const [Statestatus, setStatestatus] = useState('');

    const handleClick = () => {
        //const data = 'Appointment';
        //onButtonClicked(data);
        //const input = document.getElementById("w2Income");
        alert('W2Income'+W2Income +'W2withholding'+ W2withholding +'gains'+gains+'losses'+losses);
       const taxable_income= parseInt(W2Income) - 29500 // standard deduction
       alert('taxable_income'+taxable_income)
       //const standard_deduction = 29500;
       const rate = .22 //At least $100,000 but not over $201,050
       const subtraction_amount = 9894 //At least $100,000 but not over $201,050
       const tax1= (taxable_income * rate) - subtraction_amount;
       const final_tax=tax1-subtraction_amount
       alert('tax1'+tax1);
       alert('final_tax'+final_tax);

       if(parseInt(W2withholding) > final_tax){
        setFedstatus('Your Refund')
        setStatestatus('Your Refund')
        const refund= parseInt(W2withholding) - final_tax
        setdata3(refund);
       }
       else{
        setFedstatus('You Owe')
        setStatestatus('You Owe')
        const you_owe= final_tax - parseInt(W2withholding) 
        setdata3(you_owe);
       }


       
       setdata1(final_tax);
       setdata2(0);
       
       setdata4(0);
      };


  return (
    
       
    <Grid container spacing={10} alignContent='center' justifyContent='center' alignSelf='center' textAlign='center' overflow="hidden">
    
    <Grid size="auto">
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
        <br/><br/>
        
    </Grid>
    <Grid size="auto">
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
    
    <Grid size="auto">
    <BarChart
      {...props}
      series={[
        { data: [data1], label: 'Federal Tax' },
        { data: [data2], label: 'State Tax'  },
        { data: [data3], label: Fedstatus  },
        { data: [data4], label: Statestatus  },
      ]}
    />
    </Grid>
    
    
    </Grid>
    
    
    
  );
}

const props = {
  width: 550,
  height: 500,
  xAxis: [{ data: ['A'], scaleType: 'band' as const }],
};




