import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep2 = ({formik}) => {
    {console.log(formik.values)}
    return (
        <Box>
          <>
            <Grid container spacing={3}>
              <Grid xs={12}>
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
            </Grid>
          </>
        </Box>
      )
}

export default BecomeSellerFormStep2
