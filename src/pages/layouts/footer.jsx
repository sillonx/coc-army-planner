import React from 'react';

import { 
  Grid,
  Typography,
  Stack,
  Link
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';


export default function Footer() {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' py={4} px={1} sx={{ position:'relative', right:0, left:0, bottom:0, backgroundColor:'background.paper' }}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-start' alignItems='center' sx={{ display:'flex' }}>
        <Stack p={2} spacing={1} direction='row' justifyContent='center' alignItems='center'>
          <GitHubIcon sx={{ color:'text.secondary' }}/>
          <Typography variant='body2' sx={{ color:'text.secondary' }}>
            Website made with React and MUI, last updated 4 Jul. 2022
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-end' alignItems='center' sx={{ display:'flex' }}>
        <Stack p={2} spacing={1} direction='row' justifyContent='center' alignItems='center'>
            <BugReportIcon sx={{ color:'text.secondary' }}/>
            <Stack direction='row'>
              <Typography variant='body2' sx={{ color:'text.secondary' }}>
                Report a bug : ping @sillonx on&nbsp;
              </Typography>
              <Link href='https://discord.gg/NMXt8kz' target='_blank' rel='noreferrer' variant='body2' sx={{ color:'text.secondary', '&:hover': { color:'info.main' } }}>
                  discord
              </Link>
            </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
};
