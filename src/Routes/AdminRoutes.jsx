import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/pages/Sellers/SellersTable'
import Coupons from '../admin/pages/Coupons/Coupons'
import AddNewCouponForm from '../admin/pages/Coupons/AddNewCouponForm'
import ElectronicTable from '../admin/pages/HomePage/ElectronicTable'
import ShopByCategory from '../admin/pages/HomePage/ShopByCategory'
import Deals from '../admin/pages/HomePage/Deals'
import HomeCategoryTable from '../admin/pages/HomePage/HomeCategoryTable'
import GridTable from '../admin/pages/HomePage/GridTable'


const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SellersTable/>}/>
        <Route path='/coupon' element={<Coupons />}/>
        <Route path='/add-coupon' element={<AddNewCouponForm/>}/>
        <Route path='/home-grid' element={<GridTable />}/>
        <Route path='/electronic-category' element={<ElectronicTable />}/>
        <Route path='/shop-by-category' element={<ShopByCategory />}/>

        <Route path='/deals' element={<Deals />}/>
      </Routes>
    </div>
  )
}

export default AdminRoutes
