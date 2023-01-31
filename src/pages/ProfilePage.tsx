import React from 'react'
import Profile from '../components/Profile'
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import { spacing } from '@mui/system';
export default function ProfilePage() {
    return (
        <div>
  <Navbar></Navbar>


  <Grid container spacing={2}>
  <Grid item xs={2} sm={2} md={2}>

    </Grid>
    <Grid item xs={12} sm={6} md={8}>
    <Profile/>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    
    </Grid>
  </Grid>



        </div>
    )
}
