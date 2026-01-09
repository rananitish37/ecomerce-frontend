import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep4 = ({ formik }: BecomeSellerFormStep2Props) => {
    {{console.log(formik.values)}}
  return (
    <div className='space-y-5'>
        <TextField
            fullWidth
            name='businessdetails.businessName'
            label="Business Name"
            value={formik.values.businessdetails.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched?.businessDetails?.businessName && Boolean(formik.errors?.businessDetails?.businessName)}
            helperText={formik.touched?.businessDetails?.businessName && Boolean(formik.errors?.businessDetails?.businessName)}
        />
        <TextField
            fullWidth
            name='sellerName'
            label="Seller Name"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerName && Boolean(formik.errors?.sellerName)}
            helperText={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
        />
        <TextField
            fullWidth
            name='email'
            label="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && Boolean(formik.errors.email)}
        />
         <TextField
            fullWidth
            name='password'
            label="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && Boolean(formik.errors.password)}
        />
    </div>
  )
}

export default BecomeSellerFormStep4
