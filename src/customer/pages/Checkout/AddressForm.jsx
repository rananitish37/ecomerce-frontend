import { Box, Grid, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const AddressFromSchema = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
    pinCode: Yup.string().required("Pincode is required").matches(/^[1-9][0-9]\d{6}$/, "Invalid pin code"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
});

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
    validationSchema: AddressFromSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Box sx={{ width: '100%' }}>
      <p className="text-xl text-center pb-5 font-bold">
        Contact Details
      </p>

      <form onSubmit={formik.handleSubmit}>
        {/* We use width: '100%' and m: 0 to ensure the grid doesn't shrink */}
        <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
          
          {/* Full Width Row */}
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


          {/* Half Width Row: Mobile & Pin Code */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="pinCode"
              label="Pin Code"
              value={formik.values.pinCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid>

          {/* Full Width Row: Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address"
              label="Address"
              value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          {/* Full Width Row: Locality */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formik.values.locality}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.locality && Boolean(formik.errors.locality)}
                helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid>

          {/* Half Width Row: City & State */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          <Grid item sx={12}>
            <Button fullWidth type='submit' variant='contained' sx={{py:"14px"}}>
                Add Address
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default AddressForm