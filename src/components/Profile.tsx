import React from 'react'
import { Grid } from '@mui/material';
import {Card,CardContent,Typography}from '@mui/material'
import myImage from '../assest/IMG_20220217_112305_2.jpg'
export default function Profile() {
    return (
     <div>
       <div className=" pt-8 bg-sky-200">
    
    <div className=" w-full lg:max-w-full lg:flex bg-sky-200 ">
   
     <div className=" p-4 flex  justify-between leading-normal w-full lg:w-">
       <div className="mb-4">
         <p className="text-gray-900  text-xl mb-2">
    Name:<span className='p-2'>Abu Sfian</span>
         </p>
         <p className="text-gray-900  text-xl mb-2">
    Email:<span className='p-2'>abu053125@gmail.com</span>
         </p>
         <p className="text-gray-900  text-xl mb-2">
    Phone:<span className='p-2'>+880 01878516636</span>
         </p>
         <p className="text-gray-900  text-xl mb-2">
    Birthdate:<span className='p-2'>12/12/1200</span>
         </p>
         <p className="text-gray-900  text-xl mb-2">
    Role:<span className='p-2'>Admin</span>
         </p>
         {/* <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p> */}
       </div>
       <div className="lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-left overflow-hidden order-last border-gray-700" title="Mountain">
     <img src={myImage} className='w-80' alt="example" />
     </div>

       <div className="flex items-center">

         <div className="text-sm">
        
         </div>
        
       </div>
       
     </div>
   
  
   </div>
   <div className="p-4">
  <h3 className="text-green-900-300 mb-4 text-center border-gray-700 font-bold">
 About Me
  </h3>
  <div className="bg-white p-6 rounded-lg shadow-lg">
  
    <p className="text-gray-700">This is my cool new card Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eum illum dolores quibusdam commodi. Eum repudiandae, natus expedita ex vero fugiat aut. Illum culpa excepturi nobis. Aliquid officiis ab aperiam.</p>
  </div>
</div>
 </div>


 </div>


    )
}
