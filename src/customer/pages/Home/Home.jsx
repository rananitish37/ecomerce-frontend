import React from 'react'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'

function Home() {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectricCategory/>
        <CategoryGrid />
        <Deal/>
        <div className='pt-20'>
          <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </div>
        
    </div>
      
    </>
  )
}

export default Home
