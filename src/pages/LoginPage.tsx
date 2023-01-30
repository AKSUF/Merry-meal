import React from 'react'
import LoginForm from '../components/Login'
import Navbar from '../components/Navbar'
import { Grid } from '@mui/material';
export default function LoginPage() {
    return (
        <div>
            <Navbar/>
   <div className=' background-image: url(./ass);'>
   <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <div></div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className='pt-20'><LoginForm/></div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div></div>
      </Grid>
    </Grid>
   </div>

        </div>
    )
}
