import * as React from 'react';
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


  
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

    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
    

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filing Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filing Status"
          onChange={handleChange}
        >
          <MenuItem value={'Single'}>Single</MenuItem>
          <MenuItem value={'Married Filing Jointly'}>Married Filing Jointly</MenuItem>
          <MenuItem value={'Married Filing Seperately'}>Married Filing Seperately</MenuItem>
          <MenuItem value={'Head of a household'}>Head of a household</MenuItem>
          
        </Select>
      </FormControl>
    </Box> <br/>
    <TextField
          disabled
          id="outlined-disabled"
          label="Filing type"
          defaultValue="Standard Deduction"
        /><br/>

<br/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value={'Alabama'}>Alabama</MenuItem>
<MenuItem value={'Alaska'}>Alaska</MenuItem>
<MenuItem value={'Arizona'}>Arizona</MenuItem>
<MenuItem value={'Arkansas'}>Arkansas</MenuItem>
<MenuItem value={'California'}>California</MenuItem>
<MenuItem value={'Colorado'}>Colorado</MenuItem>
<MenuItem value={'Connecticut'}>Connecticut</MenuItem>
<MenuItem value={'Delaware'}>Delaware</MenuItem>
<MenuItem value={'Florida'}>Florida</MenuItem>
<MenuItem value={'Georgia'}>Georgia</MenuItem>
<MenuItem value={'Hawaii'}>Hawaii</MenuItem>
<MenuItem value={'Idaho'}>Idaho</MenuItem>
<MenuItem value={'Illinois'}>Illinois</MenuItem>
<MenuItem value={'Iowa'}>Iowa</MenuItem>
<MenuItem value={'Kansas'}>Kansas</MenuItem>
<MenuItem value={'Kentucky'}>Kentucky</MenuItem>
<MenuItem value={'Louisiana'}>Louisiana</MenuItem>
<MenuItem value={'Maine'}>Maine</MenuItem>
<MenuItem value={'Maryland'}>Maryland</MenuItem>
<MenuItem value={'Massachusetts'}>Massachusetts</MenuItem>
<MenuItem value={'Michigan'}>Michigan</MenuItem>
<MenuItem value={'Minnesota'}>Minnesota</MenuItem>
<MenuItem value={'Mississippi'}>Mississippi</MenuItem>
<MenuItem value={'Missouri'}>Missouri</MenuItem>
<MenuItem value={'Montana'}>Montana</MenuItem>
<MenuItem value={'Nebraska'}>Nebraska</MenuItem>
<MenuItem value={'Nevada'}>Nevada</MenuItem>
<MenuItem value={'New Hampshire'}>New Hampshire</MenuItem>
<MenuItem value={'New Jersey'}>New Jersey</MenuItem>
<MenuItem value={'New Mexico'}>New Mexico</MenuItem>
<MenuItem value={'New York'}>New York</MenuItem>
<MenuItem value={'North Dakota'}>North Dakota</MenuItem>
<MenuItem value={'Ohio'}>Ohio</MenuItem>
<MenuItem value={'Oklahoma'}>Oklahoma</MenuItem>
<MenuItem value={'Oregon'}>Oregon</MenuItem>
<MenuItem value={'Pennsylvania'}>Pennsylvania</MenuItem>
<MenuItem value={'Rhode Island'}>Rhode Island</MenuItem>
<MenuItem value={'South Carolina'}>South Carolina</MenuItem>
<MenuItem value={'South Dakota'}>South Dakota</MenuItem>
<MenuItem value={'Tennessee'}>Tennessee</MenuItem>
<MenuItem value={'Texas'}>Texas</MenuItem>
<MenuItem value={'Utah'}>Utah</MenuItem>
<MenuItem value={'Vermont'}>Vermont</MenuItem>
<MenuItem value={'Virginia'}>Virginia</MenuItem>
<MenuItem value={'Washington'}>Washington</MenuItem>
<MenuItem value={'West Virginia'}>West Virginia</MenuItem>
<MenuItem value={'Wisconsin'}>Wisconsin</MenuItem>
<MenuItem value={'Wyoming'}>Wyoming</MenuItem>
         
        </Select>
      </FormControl>
    </Box><br/>


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




