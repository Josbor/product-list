import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
//import pokeball  from '../../img/pokeball.svg';
import styled from "@emotion/styled";
import { FormControl, InputLabel, Select } from "@mui/material";

const pages = ['home', 'search', 'details'];

const AppBarProducts = ({setCol,col}:any) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
   
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    
    setAnchorElNav(null);
    
  };
 

 

  return (
    
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,alignItems:'center' }}>         
          {/* <img src={pokeball} style={{width:'50px', marginRight:'10px'}}   /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECH STORE
          </Typography>
          </Box> 
         <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,alignItems:'center' }} >
          {/* <img src={pokeball} style={{width:'35px', marginRight:'10px'}}   /> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECH STORE
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end',alignItems:'center' }}>
          
            
                    <FormControl style={{color:'white'}}color="primary">
                          <Select
                              labelId="Selecciona cantidad de columnas"
                              id="select"
                              value={col}
                              label="Age"
                              onChange={e => setCol(Number(e.target.value))}
                              >
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                          </Select >
                      </FormControl>
                              
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:'flex-end',alignItems:'center'  }}>
                     
                            <FormControl style={{color:'white'}}>
                                <InputLabel id="demo-simple-select-label">Cantidad de Columnas</InputLabel>
                                <Select
                                    labelId="Selecciona cantidad de columnas"
                                    id="select"
                                    value={col}
                                    label="Age"
                                    onChange={e => setCol(Number(e.target.value))}
                                >
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                </Select >
                            </FormControl>
                      
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarProducts;