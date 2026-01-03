import { Box, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      pinCode: '',
      address: '',
      city: '',
      state: '',
      locality: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Box sx={{ minHeight: 'auto' }}>
      <p className="text-xl text-center pb-5 font-bold">
        Contact Details
      </p>

      {/* <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={3} sx={{ 
      width: '100%', // Force full width
      margin: 0,      // Remove negative margin issues
      '& .MuiGrid-item': { paddingTop: 2, paddingLeft: 0 } // Fix spacing after clearing margin
    }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="mobile"
              label="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="pinCode"
              label="pinCode"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address"
              label="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="locality"
              label="locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="city"
              label="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="state"
              label="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
        </Grid>
      </form> */}

<form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
  <Grid container spacing={3}>
    {/* Name – full width */}
    <Grid item xs={12}>
      <TextField fullWidth name="name" label="Name" {...formik.getFieldProps('name')} />
    </Grid>

    {/* Mobile + Pin Code – same row */}
    <Grid item xs={12} sm={6}>
      <TextField fullWidth name="mobile" label="Mobile" {...formik.getFieldProps('mobile')} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField fullWidth name="pinCode" label="Pin Code" {...formik.getFieldProps('pinCode')} />
    </Grid>

    {/* Address – full width */}
    <Grid item xs={12}>
      <TextField fullWidth name="address" label="Address" {...formik.getFieldProps('address')} />
    </Grid>

    {/* Locality – full width */}
    <Grid item xs={12}>
      <TextField fullWidth name="locality" label="Locality" {...formik.getFieldProps('locality')} />
    </Grid>

    {/* City + State – same row */}
    <Grid item xs={12} sm={6}>
      <TextField fullWidth name="city" label="City" {...formik.getFieldProps('city')} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField fullWidth name="state" label="State" {...formik.getFieldProps('state')} />
    </Grid>
  </Grid>
</form>

    </Box>
  )
}

export default AddressForm
