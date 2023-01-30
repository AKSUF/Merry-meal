import React from 'react'
import JoditEditor from "jodit-react";
import {Grid, Typography} from "@mui/material"
import { useRef } from 'react';
export default function MealForm() {

    const editor = useRef(null);
    return (
        
        <div>
  
 <Grid container spacing={3}>
        <Grid item xs={3} sm={3} lg={3} md={3}>
          <div className=""></div>
        </Grid>
        <Grid item xs={6} sm={6} lg={6} md={6} className=''>
   

        <div className="w-full shadow border-2 mt-10 ">

    <div className=' w-full h-12 shadow-green-700 bg-green-200 shadow'>
        <Typography variant='h5' className='text-center'>
            Add Meal Form
        </Typography>
    </div>
    <form className="" action="#" method="POST" >
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div className=''>
          <label htmlFor="name"></label>
          <input id="name" name="name" type="text" className="relative block w-full  appearance-none hover:bg-   rounded-none bg-white  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give Name of meal"/>
        </div>
        <div className='pt-2'>
          <label htmlFor="status" className="sr-only">Status</label>
          {/* <input id="status" name="status" type="text"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give the status for food"/> */}

          <select className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
            <option>Give _Your_Status</option>
            <option>Dried</option>
          </select>
        </div>
        <div className='pt-2'>
          <label htmlFor="catagory" className="sr-only">Catagory</label>
          {/* <input id="status" name="status" type="select"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Selecr Catagory"> */}

          <select className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
            <option>Select-Meal-Catagory</option>
            <option>Dried</option>
          </select>

          {/* </input> */}
        </div>
        <div className='pt-2'>
          <label htmlFor="meal_img" className="sr-only">Img</label>
          <input id="meal_img" name="meal_img" type="file"  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give the food name"/>
        </div>

        <div className='pt-2'>
          <label htmlFor="meal_img" className="sr-only">about meal</label>
          {/* <input id="status" name="status" type="file"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give the status for food"/> */}
          <JoditEditor ref={editor} value=""/>
        </div>

      </div>

     

     
      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
           
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
Add Meal
        </button>
      </div>
    </form>
  </div>


            
         
        </Grid>
        <Grid item xs={2} sm={2} lg={2} md={2}>
          <div className=""></div>
        </Grid>
      </Grid>

        </div>
    )
}
