import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavbarBanner = () => {
  return(
      <Box style={{width:'100%'}}>

            <Box sx={{ flexGrow: 1 }} style={{position:'fixed',top:0,width:'100%'}}>
                <AppBar position="static" style={{background:'white',color:'black'}}>
                    <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <span style={{fontWeight:'bolder'}}>BR</span> Architects
                    </Typography>
                    <Button color="inherit" style={{textTransform:'inherit'}}>Projects</Button>
                    <Button color="inherit" style={{textTransform:'inherit'}}>About</Button>
                    <Button color="inherit" style={{textTransform:'inherit'}}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box style={{backgroundImage:`url(./architect.jpg)`,height:'100vh',width:'100%',backgroundPosition:'center',backgroundSize:'cover',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography style={{color:'white',fontSize:30,marginTop:10}}>
                    <span style={{background:'black',opacity:'0.7',padding:'9px 25px',}}>BR</span> Arichitect
                </Typography>
            </Box>


      </Box>
  )
};

export default NavbarBanner;
