import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Typography,
  Stack,
  Button
} from '@mui/material';

import CottageIcon from '@mui/icons-material/Cottage';


export default function Error404() {

  const navigate = useNavigate();

  const returnHome = (e) => {
    navigate('/');
  }

  return (
    <Stack spacing={3} direction='column' justifyContent='center' alignItems='center' sx={{ minHeight:300 }}>
      <Typography variant='h6'>
        ERROR 404 : this page wasn't found
      </Typography>
      <Button size='large' variant='contained' onClick={returnHome} startIcon={<CottageIcon/>} sx={{ backgroundColor:'success.main', '&:hover': { backgroundColor:'success.main' } }}>
        Return Home
      </Button>
    </Stack>
  )
};
