import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link} from '@mui/material';
import { Grid } from '@mui/material';
export default function RegistrationForm() {
  return (
  <div>
              <div className="p-6 rounded-lg shadow-lg  bg-green-300 max-w-sm">

                <div className='text-center  '>
<p className='font-size-10px'>Sign Up</p>

                </div>
    <form>
      <div className="form-group mb-2">
        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
        <input type="email" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-green-100 bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
          aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <div className="form-group mb-6">
        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
        <input type="password" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
          placeholder="Password"/>
      </div>
      <div className="flex justify-between items-center mb-6">
        {/* <div className="form-group form-check">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck2"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
        </div> */}
        {/* <a href="#!"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
          password?</a> */}
      </div>
      <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Sign Up</button>

        <div>
<div className='flex pt-2'>
<div className='mr-5 ml-5'>
<Button className=''
        variant="contained"
      
        startIcon={<FacebookIcon />}
      >
      Facebook
      </Button>
  </div>
<div> 
<Button
        variant="contained"
      
        startIcon={<GoogleIcon/>}
      >
        Google
      </Button>

</div>
</div>

        </div>
        <Link href="#" underline="none">
     
    </Link>
      <p className="text-gray-800 mt-6 text-center">Already have an account? <a href="#!"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Log In</a>
      </p>
      
    </form>
  </div>
  </div>
  );
}
