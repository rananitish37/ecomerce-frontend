import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep3 = ({ formik }: BecomeSellerFormStep2Props) => {
    {{console.log(formik.values)}}
  return (
    <div className='space-y-5'>
      <TextField
      fullWidth
      name='bankdetails.accountNumber'
      label="Account Number"
      value={formik.values.bankdetails.accountNumber}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.bankdetails?.accountNumber && Boolean(formik.errors.bankdetails?.accountNumber)}
      helperText={formik.touched.bankdetails?.accountNumber && Boolean(formik.errors.bankdetails?.accountNumber)}/>
       <TextField
      fullWidth
      name='bankdetails.ifscCode'
      label="IFSC Code"
      value={formik.values.bankdetails.ifscCode}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.bankdetails?.ifscCode && Boolean(formik.errors.bankdetails?.ifscCode)}
      helperText={formik.touched.bankdetails?.ifscCode && Boolean(formik.errors.bankdetails?.ifscCode)}/>
      <TextField
      fullWidth
      name='bankdetails.accountHolderName'
      label="Account Holder Name"
      value={formik.values.bankdetails.accountHolderName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.bankdetails?.accountHolderName && Boolean(formik.errors.bankdetails?.accountHolderName)}
      helperText={formik.touched.bankdetails?.accountHolderName && Boolean(formik.errors.bankdetails?.accountHolderName)}/>
    </div>
  );
};

export default BecomeSellerFormStep3
