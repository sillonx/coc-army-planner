import React from 'react';
import { useCookies } from 'react-cookie';

import { 
  Typography,
  IconButton,
  Box
} from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import coc_logo from '../../static/images/others/coc_logo.png';

export default function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(['mode']);

  const handleChange = () => {
    const newMode = (cookies.mode === 'dark' ? 'light' : 'dark');
    newMode === 'dark' ? setCookie('mode', newMode, {path:'/', maxAge:31536000}) : removeCookie('mode', {path:'/'});
  };

  return (
    <>
      <Box p={3} maxWidth sx={{ alignContent:'center', alignItems:'center', justifyContent:'space-between', flexDirection:'row', position:'static', bottom:0, backgroundColor:'background.paper', boxShadow:5, display:'flex' }}>
        <Typography variant='h5'>
          6onx's Army Planner
        </Typography>
        <Box component='img' sx={{ height: 100 }} alt='Clash of Clans Logo' src={coc_logo}/>
        <IconButton size='large' onClick={handleChange}>
          {cookies.mode === 'dark' ? 
          <DarkModeIcon sx={{ color:'common.white', backgroundColor:'background.paper', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> : 
          <LightModeIcon sx={{ color:'common.black', backgroundColor:'background.paper', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> }
        </IconButton>
      </Box>
    </>
  )
};