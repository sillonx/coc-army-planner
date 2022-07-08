import React from 'react';
import { useCookies } from 'react-cookie';

import { 
  Typography,
  IconButton,
  Box,
  Grid
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
      <Grid container direction='row' justifyContent='space-between' alignItems='center' p={3} sx={{ position:'static', bottom:0, backgroundColor:'background.paper', boxShadow:5, display:'flex' }}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent='center' alignItems='center' sx={{ display:'flex' }}>
          <Typography variant='h5'>
            CoC Army Planner
          </Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent='center' alignItems='center' sx={{ display:'flex' }}>
          <Box component='img' sx={{ height: 100 }} alt='Clash of Clans Logo' src={coc_logo}/>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent='center' alignItems='center' sx={{ display:'flex' }}>
          <IconButton size='large' onClick={handleChange}>
            {cookies.mode === 'dark' ? 
            <DarkModeIcon sx={{ color:'common.white', backgroundColor:'background.default', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> : 
            <LightModeIcon sx={{ color:'common.black', backgroundColor:'background.default', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> }
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
};