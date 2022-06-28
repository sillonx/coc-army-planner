import React from 'react';

import { 
  Stack,
  Typography 
} from '@mui/material';

import NavBar from './nav';

export default function Header() {
  return (
    <>
      <Stack>
        <Typography sx={{ minHeight:100, position:'static', bottom:0 }}>
          Mainpage Header
        </Typography>
      </Stack>
      <NavBar/>
    </>
  )
};