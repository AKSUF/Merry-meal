import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link} from '@mui/material';
import React, { useState } from 'react';


interface FormData {
  name: string;
  email: string;
  password: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    if (validate()) {
      console.log('Form is valid, send data to the server');
      // Do something with the form data here
    }
    setSubmitting(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='shadow bg-white'>
    <div className=" rounded-lg w-full">

<Typography variant="h6" className='text-center'>
  Sign Up
  </Typography>

  <form onSubmit={handleSubmit}>
      <div className="form-group mb-1 pl-10">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange} className="form-control block
          w-10/12
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none required"   placeholder="abc78@gmail.com"
        />
        {formErrors.name && <div>{formErrors.name}</div>}
      </div>
      <div className="form-group mb-1 pl-10">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange} className="form-control block
          w-10/12
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none required" 
        />
        {formErrors.email && <div>{formErrors.email}</div>}
      </div>
      <div className="form-group mb-1 pl-10">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}  className="form-control block
          w-10/12
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
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        />
        {formErrors.password && <div>{formErrors.password}</div>}
      </div>
      <button type="submit" disabled={submitting} className="
            w-10/12
        px-6
        py-2.5 pl-10
        mt-5
        ml-10
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
        ease-in-out">
        Submit
      </button>
      <div className='flex  ml-12 pl-20 pt-4'>
<div className=' mr-3 justify-center '>
<Button className='mr-3 pl-3'
        variant="contained"
      
        startIcon={<FacebookIcon />}  >
      Facebook
      </Button>
  </div>

<div> 
<Button
        variant="contained"
      
        startIcon={<GoogleIcon/>} className='ml-3'
      >
        Google
      </Button>

</div>
</div>
<Link href="#" underline="none">
     
     </Link>
       <p className="text-gray-800 mt-6  text-center">Already have a member? <a href="#!"
           className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Log In</a>
       </p>

      
    </form>




      </div>
      </div>
  
  );
};

export default RegistrationForm
