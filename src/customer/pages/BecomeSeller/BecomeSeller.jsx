import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleShowPage = ()=>{
        setIsLogin(!isLogin);
    }
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
      {/* <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'> */}
      <section className='col-span-1 p-10 shadow-lg rounded-b-md'>
            {isLogin?<SellerAccountForm/>:<SellerLoginForm/>}
            <div className='mt-10 space-y-2'>
                <h1 className='text-center text-sm font-medium'>have account</h1>
                <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
                    {isLogin?"Login":"Register"}
                </Button>
            </div>
      </section>
      <section className='md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
        <div className='lg:w-[70%] px-5 space-y-10'>
            <div className='space-y-2 font-bold text-center'>
                <p className="text-2xl">Join the marketplace revolution</p>
                <p className='text-lg text-primary-color'>Boost your sales today</p>
            </div>
            <img src="https://media.istockphoto.com/id/2169073275/photo/beautiful-young-hispanic-woman-managing-her-home-e-commerce-business-from-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=N8Y52c82POYN4ShagrvPMC25koIZ1YEDMAyeP78sIOM=" alt="" />
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller
