
import ReactDOM from "react-dom/client";
import AppBar from "./AppBar";
//import { StyledEngineProvider } from '@mui/material/styles';

//import Footer from "./Footer";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
//import Body1 from "./Body1";
//import Body2 from "./Body2";
//import Body3 from "./Body3";

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';


Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
 
    <ThemeProvider>
        
    <AppBar />
    </ThemeProvider>
 
);
