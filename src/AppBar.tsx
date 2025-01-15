import * as React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from "./Footer";
import Landingpage from "./Landingpage";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Pricing from "./Pricing";
import Services from "./Services";
import Header from "./Header";
//import Body1 from "./Body2"
//import test from "../src/assets/tax3.jpg"; // with import


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Pricing', 'Services','About us','Contact us'];





export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
   //const [activeStep, setActiveStep] = React.useState(0);
    const [activeComp, setActiveComp] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const openNavItem = (item:any) =>{
    //alert(item);
    setActiveComp(item);
  }



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>openNavItem(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" color='primary' sx={{ bgcolor: "#063970" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            <b>Sharma Tax Associates</b>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={()=>openNavItem(item)}>
                <b>{item}</b>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      
    </Box>
    
    
    {(activeComp === "Home") && <Landingpage />}
    {(activeComp === "Contact us") && <Contactus />}
    {(activeComp === "About us") && <Aboutus />}
    {(activeComp === "Pricing") && <Pricing />}
    {(activeComp === "Services") && <Services />}
    <Footer />
    </Box>
    
    
  );
  
}