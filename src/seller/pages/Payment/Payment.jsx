import React from 'react'
import Transaction from './Transaction'
import { Card } from '@mui/material'

const Payment = () => {
  return (
    <div className=''>
      <Card className='rounded-md space-y-4'>
        <h1 className='text-gray-600 font-medium'>Total Earning</h1>
      </Card>
      
      <Transaction />
    </div>
  )
}

export default Payment
