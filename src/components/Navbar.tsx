import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu,AiFillHome } from 'react-icons/ai';
import { GiFoodChain} from 'react-icons/gi';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';



const Navbar = () => {

    const[nav, setNav]= useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }


  return (
    <div className=' bg-green-400 w-full'>
        <div className=' flex justify-between items-center md:h-20 sm:h-16 h-16 lg:px-24 md:px-5 sm:px-5 px-5 blur-backdrop-filter   mx-auto text-white'>
        <h1 className=' text-3xl font-bold cursor-pointer'>Merry Meal</h1>
        <ul className='hidden md:flex cursor-pointer uppercase  font-bold '>
            <li className='p-3  dark:hover:text-green-700'><AiFillHome className='inline-block mr-2 mb-2 text-gray-900 ' />Home</li>
            <li className='p-3  dark:hover:text-green-700'><GiFoodChain className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Meals</li>
            <li className='p-3  dark:hover:text-green-700'><InfoIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>About Us</li>
            <li className='p-3  dark:hover:text-green-700'><ContactsIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Contact Us</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden '>
            {!nav ? <AiOutlineClose className='font-bold' size={25} /> : <AiOutlineMenu className='font-bold' size={25}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 h-full w-[40%] bg-opacity-100 ease-in-out duration-1000 bg-green-400 md:hidden':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4  cursor-pointer'>Merry Meal</h1>

            <ul className='p-4 uppercase text-left text-xl cursor-pointer font-bold '>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><AiFillHome className='inline-block mr-2 mb-2 text-gray-900 ' />Home</li>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><GiFoodChain className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Meals</li>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><InfoIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>About Us</li>
            <li className='p-4 border-gray-600 hover:border-b dark:hover:border-gray-400 dark:hover:text-green-700'><ContactsIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Contact Us</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar