import React from 'react'
import LoginForm from '../components/Login'
import Navbar from '../components/Navbar'
import { Grid } from '@mui/material';
import RegistrationForm from '../components/Registration';
export default function RegistrationPage() {
    return (
        <div>
            <Navbar/>
            <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <div></div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className='pt-20'><RegistrationForm/></div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div></div>
      </Grid>
    </Grid>

        </div>
    )
}
