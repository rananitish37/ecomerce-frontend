import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid container spacing={8}>
        <Grid size={{xs:1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
              C
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{xs:9}}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>Codex</p>
              <p className='opacity-70'>2025-09-27T23:16:07.478333</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={.5} />
          <p>Value for money Product, Greate one in this budget</p>
          <div>
            <img className='w-24 h-24 object-cover' src='https://res.cloudinary.com/dxoqwusir/image/upload/v1727459152/purchased_product_b19fgy.jpg' 
            alt=''/>
          </div>
        </Grid>

        
      </Grid>
      <div><IconButton>
          <Delete sx={{color:red[700]}}/>
        </IconButton></div>
    </div>
  )
}

export default ReviewCard
