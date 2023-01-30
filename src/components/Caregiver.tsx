import React from 'react'
import {Button, Grid,ButtonGroup,Card,CardMedia,CardContent,Typography,CardActions} from '@mui/material'
import myImage from '../assest/IMG_20220217_112305_2.jpg'
export default function Caregiver() {
    return (
        <div className='border-green-900 border-spacing-9 outline lg:w-full lg:h-full md:w-1/2 sm:3/2 border-1 pt-4'>
           <Grid container spacing={2}>
        <Grid item xs={6} sm={2} md={2} className='border-2  justify-center '>
        <Button variant="contained" className='w-full bg-yellow-400'>Session</Button>

 
        <Button variant="outlined" className='w-full pt-2'>10.00am-11.00pm</Button>
        <Button variant="outlined" className='w-full pt-2'>11.30am-2.00pm</Button>
        <Button variant="outlined" className='w-full pt-2'>5.00pm-7.00pm</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={9} className='pt-3'>
    <div className='m-3 border-2 border-green-200 lg:w-full md:w-1/2 sm:3/2'>

   <Grid container spacing={3} className='pt-3'>
        <Grid item xs={12} sm={6} md={3}>
          <div className="pt-2">
          <Card elevation={10} style={{ display: 'flex', alignItems: 'center' }} >
          <CardMedia
           sx={{ width: '50%'  }}
            component="img"
            alt="green iguana"
            height="45"
            image={myImage} className='text-center'
          />
           <CardContent>
            {/* <Typography gutterBottom variant="h6" component="div">
              Category: Fruit
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            <h2>Name:</h2>
              <h2>Email:</h2>
              <h2>Phone:</h2>
              <h2>Gender:</h2>
            </Typography>
          </CardContent>
          <CardActions>
            <button className=' bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
          </CardActions>
        </Card>

          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
               <div className="">
               <Card elevation={10} style={{ display: 'flex', alignItems: 'center' }} >
          <CardMedia
           sx={{ width: '50%'  }}
            component="img"
            alt="green iguana"
            height="45"
            image={myImage} className='text-center'
          />
           <CardContent>
            {/* <Typography gutterBottom variant="h6" component="div">
              Category: Fruit
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            <h2>Name:</h2>
              <h2>Email:</h2>
              <h2>Phone:</h2>
              <h2>Gender:</h2>
            </Typography>
          </CardContent>
          <CardActions>
            <button className=' bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
          </CardActions>
        </Card>
    </div>

            
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div className="">
        <Card elevation={10} style={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
           sx={{ width: '50%'  }}
            component="img"
            alt="green iguana"
            height="45"
            image={myImage} className='text-center'
          />
           <CardContent>
            {/* <Typography gutterBottom variant="h6" component="div">
              Category: Fruit
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            <h2>Name:</h2>
              <h2>Email:</h2>
              <h2>Phone:</h2>
              <h2>Gender:</h2>
            </Typography>
          </CardContent>
          <CardActions>
            <button className=' bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
          </CardActions>
        </Card>
    </div>

     
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card elevation={10} style={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
           sx={{ width: '50%'  }}
            component="img"
            alt="green iguana"
            height="45"
            image={myImage} className='text-center'
          />
           <CardContent>
            {/* <Typography gutterBottom variant="h6" component="div">
            Name:
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
            <h2>Name:</h2>
              <h2>Email:</h2>
              <h2>Phone:</h2>
              <h2>Gender:</h2>
            </Typography>
          </CardContent>
          <CardActions>
            <button className=' bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
          </CardActions>
        </Card>
         
        </Grid>
      </Grid>

    </div>
        </Grid>
      
      </Grid>
        </div>
    )
}
