import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Switch
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const pages = [
  []
];

export default function NavBar() {

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['mode']);

  const handleChange = () => {
    const newMode = (cookies.mode === 'dark' ? 'light' : 'dark');
    newMode === 'dark' ? setCookie('mode', newMode, {path:'/', maxAge:31536000}) : removeCookie('mode', {path:'/'});
  };
  
  return (
    <AppBar position='sticky' sx={{ borderRadius:'16px', backgroundColor:'navbar.background' }}>
      <Container maxWidth='x1'>
        <Toolbar disableGutters>
          <Box pl={1}>
            <Button size='large' startIcon={<HomeIcon/>} onClick={() => {navigate('/')}} sx={{ color:'navbar.text', fontWeight: 'fontWeightBold', '&:hover': { color:'navbar.textHover' } }}>
              HOME
            </Button>
          </Box>
          <Box sx={{ flexGrow:1, display: { xs:'flex', sm:'flex', md:'flex', lg:'flex', xl:'flex' } }}>
            {pages.map((page) => (
              <Button
              size='large'
              key={page[0]}
              sx={{ my:2, display:'block', color:'navbar.text', fontWeight: 'fontWeightBold', '&:hover': { color:'navbar.textHover' } }}
              onClick={() => {navigate(page[1])}}
              >
                {page[0]}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow:0 }}>
            <Switch
            icon={<LightModeIcon sx={{ color:'common.black', backgroundColor:'background.paper', borderRadius:5, boxShadow:5 }}/>} 
            checkedIcon={<DarkModeIcon sx={{ color:'common.white', backgroundColor:'background.paper', borderRadius:5, boxShadow:5 }}/>} 
            onChange={handleChange}
            checked={cookies.mode === 'dark'}
            sx={{  }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
};
