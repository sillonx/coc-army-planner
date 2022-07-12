import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Typography,
  Stack,
  Button
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';


export default function Error404() {

  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  }

  return (
    <Stack spacing={3} direction='column' justifyContent='center' alignItems='center' sx={{ minHeight:300 }}>
      <Typography variant='h6'>
        ERROR 404 : this page wasn't found
      </Typography>
      <Button size='large' variant='contained' onClick={returnHome} startIcon={<HomeIcon/>} sx={{ backgroundColor:'success.main', '&:hover': { backgroundColor:'success.main' } }}>
        Return Home
      </Button>
    </Stack>
  )
};
