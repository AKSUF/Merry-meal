import React from 'react'
import {Grid, Typography} from '@mui/material'
export default function DeliverOrderForm() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2} sm={3} lg={2} md={2}><p>Hi all</p></Grid>
                <Grid item xs={7} sm={3} lg={7} md={7}>
                    
                    <div className='mt-20 pt-5 text-white'>
<div className='pt-5 card bg-green-900 shadow justify-center '>
<Typography variant='h6' className=' text-center'>
Delivery Form
</Typography>
<p className='text-center'>Give your adress to receive your order</p>
</div>
<form>
    {/* for dadress */}
<div className='mt-5 card bg-white shadow justify-center '>

{/* <input id="name" name="name" type="textarea" className="relative block w-full  appearance-none hover:bg-   rounded-none bg-white   px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Type Adresss"/> */}
<textarea id="delivery_address" name="delivery_address" className='relative block w-full  appearance-none hover:bg-   rounded-none bg-white   px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ' placeholder="Give Delivery Address"></textarea>
</div>










</form>
                    </div>
                    
                    
                    
                    </Grid>
                <Grid item xs={2} sm={2} lg={3} md={2}><p>Hi all</p></Grid>
            </Grid>
        </div>
    )
}

