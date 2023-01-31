
import {Grid, Typography} from '@mui/material'
import React, { useState } from 'react'



export default function DeliverOrderForm() {

    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!deliveryAddress) {
    setError('Delivery address is required')
    return
    }
    // handle successful submission here
    }



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
<p className='text-center'>Give your address to receive your order</p>
</div>
<form onSubmit={handleSubmit}>
<div className='mt-5 card bg-white shadow justify-center'>
<textarea
id="delivery_address"
name="delivery_address"
className='relative block w-full appearance-none hover:bg- rounded-none bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm '
placeholder="Give Delivery Address"
value={deliveryAddress}
onChange={(e) => setDeliveryAddress(e.target.value)}
/>
{error && <p className="text-red-500">{error}</p>}
</div>
<div className='card  shadow justify-center'>
<button type="submit" className="
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
</div>
</form>
</div>
                    </Grid>
                <Grid item xs={2} sm={2} lg={3} md={2}><p>Hi all</p></Grid>
            </Grid>
        </div>
    )
}

