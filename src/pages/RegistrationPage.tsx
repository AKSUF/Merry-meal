import React from 'react'
import LoginForm from '../components/Login'
import Navbar from '../components/Navbar'
import { Grid } from '@mui/material';
import RegistrationForm from '../components/Registration';
export default function RegistrationPage() {
    return (
        <div>
            <Navbar/>
            <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvOKON-ZrJiOJYw9zj74xSLTMMEijZPnhCg&usqp=CAU')",  backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh' }}  className='hello'>  
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
        </div>
    )
}
