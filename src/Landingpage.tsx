//import * as React from 'react';
//import { useState } from 'react'
import Box from '@mui/material/Box';
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Header from "./Header";


export default function BoxBasic() {
  return (
    <Box width="99%">
         <Header />
         <Body1/>
         <Body2/>
         <Body3/>
    </Box>
  );
}