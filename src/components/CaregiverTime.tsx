import React from 'react'
import {Button, Grid,ButtonGroup,Card,CardMedia,CardContent,Typography,CardActions, Input} from '@mui/material'
import myImage from '../assest/download.png'
export default function CaregiverTime() {
    return (
        <div className='pt-4 border-2 border-green-900'>
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <div className='border-2 border-green-800'>

          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      {/* <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Add Your Caregive Time</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
      
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Merry Meal Organization</a>
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="date" className="sr-only">Give Date</label>
          <input id="date" name="date" type="text"  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Date"/>
        </div>
        <div className='pt-4'>
          <label htmlFor="session" className="sr-only">Session Time</label>
          <input id="session" name="session" type="text"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Session"/>
        </div>
      </div>
{/* 
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div> */}

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
       
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
Set Time
        </button>
      </div>
    </form>
  </div>
</div>


          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <div className='border-2 border-green-800 pl-3'>
          
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <div className=''>
          
   <Card elevation={10} >
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
            <h2>Time:</h2>
            <h2>Date:</h2>
            </Typography>
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className=''>
          
   <Card elevation={10} >
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
            <h2>Time:</h2>
            <h2>Date:</h2>
            </Typography>
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
          
          
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className=''>
          
          
   <Card elevation={10} >
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
            <h2>Time:</h2>
            <h2>Date:</h2>
            </Typography>
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
          
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className=''>
          
          
   <Card elevation={10} >
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
            <h2>Time:</h2>
            <h2>Date:</h2>
            </Typography>
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
          
          
          
          </div>
        </Grid>
      </Grid>
          
          
          
          </div>
        </Grid>
       
      </Grid>
        </div>
    )
}
