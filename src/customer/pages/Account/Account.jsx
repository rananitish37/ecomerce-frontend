import { Divider } from '@mui/material'
import React from 'react'

const Account = () => {
  return (
    // <div className='px-5 lg:px-52 min-h-screen mt-10'>
        <div className='lg:px-52 min-h-screen mt-10'>
        <div>
            <h1 className='text-xl font-bold pb-5'>Codex</h1>
        </div>
        <Divider/>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]'>
            <section className='col-span-1 lg:border-r lg:pr-5 py-5'>
                Left
            </section>
            <section>
                Right
            </section>
        </div>
      
    </div>
  )
}

export default Account
