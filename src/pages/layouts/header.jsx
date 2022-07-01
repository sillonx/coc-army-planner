import React from 'react';
import { useCookies } from 'react-cookie';

import { 
  Grid,
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
      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height:130, position:'static', bottom:0, backgroundColor:'background.paper', boxShadow:5 }}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent='flex-end' alignItems='center'>
          <Typography variant='h5' sx={{ margin:'0 auto', float:'none' }}>
            6onx's Army Planner
          </Typography>
        </Grid>
        <Box xs={4} sm={4} md={4} lg={4} xl={4} component='img' sx={{ height: 100, margin:'0 auto', float:'none' }} alt='Clash of Clans Logo' src={coc_logo}/>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent='flex-end' alignItems='center'>
          <IconButton size='large' onClick={handleChange} sx={{ margin:'0 auto', float:'none' }}>
            {cookies.mode === 'dark' ? 
            <DarkModeIcon sx={{ color:'common.white', backgroundColor:'background.paper', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> : 
            <LightModeIcon sx={{ color:'common.black', backgroundColor:'background.paper', borderRadius:5, boxShadow:5, width: 33, height: 33 }}/> }
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
};