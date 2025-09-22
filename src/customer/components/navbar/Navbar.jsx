import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';


const Navbar = () => {
  const theme = useTheme();
  const isLarge =useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <>
      <Box>
        <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
            <div>
                <div className='flex items-center gap-2'>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <h1 className='logo cursor-pointer text-lg md:text-2xl text-[#003366]'>
                      Kuntiputra
                    </h1>
                </div>
            </div>
            <div className='flex gap-1 lg:gap-6 items-center'>
                <IconButton>
                <SearchIcon />
              </IconButton>

              {
                false?<Button className='flex items-center gap-2'> 
                  <Avatar
                  sx={{width:29,height:29}}
                  src='https://avatars.githubusercontent.com/u/110787633?v=4' />
                  <h1 className='font-semibold hidden lg:block'>
                    RANA
                  </h1>
                 
                  </Button>:
                <Button variant='contained'>Login</Button>
              }
              <IconButton>
                <FavoriteBorderIcon sx={{fontSize:29}} />
              </IconButton>
              <IconButton>
                <AddShoppingCartIcon className='text-gray-700' sx={{fontSize:29}}/>
              </IconButton>

              {isLarge && <Button startIcon={<StorefrontIcon/>} variant='outlined'>
                Become Seller
              </Button>}
            </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar
