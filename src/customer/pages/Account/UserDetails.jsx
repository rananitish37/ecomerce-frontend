import React from 'react'
import ProfileFeildCard from '../../../Components/ProfileFeildCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        {/* <div className='w-full lg:w-[70%]'> */}
        <div className='w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
                
            </div>
            <div>
                    <ProfileFeildCard keys='Name' value={"Codex"}/>
                    <Divider/>
                    <ProfileFeildCard keys='Email' value={"codex@gmail.com"}/>
                    <Divider/>
                    <ProfileFeildCard keys='Mobile' value={9334036699}/>
                </div>
        </div>
    </div>
  )
}

export default UserDetails
