import { url } from 'inspector'
import React from 'react'
import DeliverOrderForm from '../components/DeliverOrderForm'
import Navbar from '../components/Navbar'

export default function DeliverOrderFormPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRlbGl2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",  backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh' }}  className='hello'>  
                
                
                
                 <DeliverOrderForm></DeliverOrderForm>
            
            
            
            
            </div>
          
        </div>
    )
}
