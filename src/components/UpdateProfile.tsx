import React from 'react'
import {Grid,CardMedia,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material'
import myImage from '../assest/download.png'
export default function UpdateProfile() {


    return (
        <div className='pt-5'>
               <Grid container spacing={0}>
        <Grid item xs={12} sm={4}  md={3}>
          <div className="border-2">
          <div className="lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-left overflow-hidden pl-4 order-last border-gray-700" title="Mountain">
     <img src={myImage} className='w-full' alt="example" />
     </div>
  
          </div>
        </Grid>
        <Grid item xs={12} sm={4}  md={9}>
        <div className="border-2">
        <Typography variant="h5" component="h2" className='pl-4'>
Edit profile
</Typography>

<div className='pl-2 pr-5 pt-2'>
<div className='border-2 w-full pt-2   hover:bg-green-900   hover:text-white'>Name:</div>
<div className='border-2 w-full pt-2  hover:bg-green-900  hover:text-white'>Gender:</div>
<div className='border-2 w-full pt-2  hover:bg-green-900   hover:text-white'>Email:</div>
<div className='border-2 w-full pt-2  hover:bg-green-900   hover:text-white'>Phone:</div>
<div className='border-2 w-full pt-2  hover:bg-green-900   hover:text-white'>Birth date:</div>
</div>

        </div>

        </Grid>
    
      </Grid>
      <div className=''>
      <div className='justify-center'>
  <Typography variant="h5" component="h1" className='pl-4 text-center bg-green text-orange-900'>
About Me
</Typography>
<div className=' w-full pl-5 pr-5 shadow hover:bg-green-900  hover:text-white'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione, atque minima facilis eveniet repudiandae nam reiciendis obcaecati quisquam facere excepturi, nihil commodi minus illum labore odit iusto aspernatur maxime.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione, atque minima facilis eveniet repudiandae nam reiciendis obcaecati quisquam facere excepturi, nihil commodi minus illum labore odit iusto aspernatur maxime.lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione, atque minima facilis eveniet repudiandae nam reiciendis obcaecati quisquam facere excepturi, nihil commodi minus illum labore odit iusto aspernatur maxime.lorem
    </p>
</div>
      </div>
      </div>
        </div>
    )
}
