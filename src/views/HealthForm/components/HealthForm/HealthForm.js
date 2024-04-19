/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MultipleSelect from './MultipleSelect'
import Radios from './Radios'


import {handleSubmitForm} from 'utils/form-helper'

const yesNoOptions = ['No', 'Yes']
const tempMethods = [
  'Wax',
  'Shaving',
  'Electric Epilator',
  'Bleaching',
  'Scissors',
  'Threading',
  'Sugar',
  'Depilatory cream',
  'Home light-based epilator',
  'Sanding',
  'Tweezers'
]
const phoneRegExp = /[0-9]{3}-?[0-9]{3}-?[0-9]{4}/

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name.')
    .max(50, 'Please enter a valid name.')
    .required('Name is required.'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid.').required('Phone number is required.'),
  email: yup.string().trim().email('Please enter a valid email address').required('Email is required.'),
  address: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid street address')
    .max(100, 'Please enter a valid street address')
    .required('Address is required.'),
  city: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid city.')
    .max(50, 'Please enter a valid city.')
    .required('City is required'),
  state: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid state abbreviation or name.')
    .max(20, 'Please enter a valid state name.')
    .required('State is required.'),
  zip: yup
    .string()
    .trim()
    .min(5, 'Please enter a valid zip code.')
    .max(5, 'Please enter a valid zip code.')
    .required('Zip code is required.'),
  referredBy: yup.string().trim().min(2, 'Please enter a valid name.').max(50, 'Please enter a valid name.'),
  skinConcerns: yup.string().trim().max(400, 'Please limit your message to 400 characters.'),
  hadPastElectro: yup
    .string()
    .oneOf([...yesNoOptions]),
  tempMethodUsed: yup.array().of(yup.string())
})

const HealthForm = () => {

  const [formState, setFormState] = useState('')

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    referredBy: '',
    skinConcerns: '',
    hadPastElectro: 'No',
    tempMethodUsed: []
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      try {
        setFormState('init')
        actions.setSubmitting(true)
        handleSubmitForm(values, {...actions})
      } catch (err) {
        setFormState('We apologize, but there seems to be an issue. Please try again later.')
        console.log(err)
      } finally {
        setFormState(
          `Thank you for taking the time to provide me with your health information. I value your input and look forward to treating you in my office soon.`
        )
        console.log(values)
      }
    }
  })
  const isDisabled =
    !formik.values.fullName ||
    !formik.values.phoneNumber ||
    !formik.values.email ||
    !formik.values.address ||
    !formik.values.city ||
    !formik.values.state ||
    !formik.values.zip ||
    formState

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography variant={'h3'} sx={{fontWeight: 700}} align={'center'} gutterBottom>
          Health Questionnaire
        </Typography>
        <Typography color="text.secondary" align={formState ? 'left' : 'center'}>
          Please answer the following questions to the best of your knowledge & ability.
        </Typography>
      </Box>
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            formik.handleSubmit()
          }}
          id="health-form"
          name="health-form"
          data-netlify={'true'}
          method="POST"
          autoComplete="on"
        >
          <input type="hidden" name="form-name" value="health-form" />
          {/*<Grid item xs={12} sm={6}> <Typography variant={'subtitle1'} sx={{marginBottom: 2}} fontWeight={700}> General Information </Typography> </Grid>*/}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
                sx={{
                  height: 54,
                  backgroundColor: 'white !important',
                }}
                autoComplete="name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{height: 54}}
                label="Phone Number"
                fullWidth
                variant="outlined"
                type="tel"
                color="primary"
                size="medium"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                autoComplete="phone"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{height: 54}}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{height: 54}}
                label="Address"
                variant="outlined"
                color="primary"
                size="medium"
                name="address"
                id="address"
                fullWidth
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{height: 54}}
                label="City"
                variant="outlined"
                color="primary"
                size="medium"
                name="city"
                id="city"
                fullWidth
                value={formik.values.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{height: 54}}
                label="State"
                variant="outlined"
                color="primary"
                size="medium"
                name="state"
                id="state"
                fullWidth
                value={formik.values.state}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{height: 54}}
                label="Zip"
                variant="outlined"
                color="primary"
                size="medium"
                name="zip"
                id="zip"
                fullWidth
                value={formik.values.zip}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.zip && Boolean(formik.errors.zip)}
                helperText={formik.touched.zip && formik.errors.zip}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{height: 54}}
                label="Referred By"
                variant="outlined"
                color="primary"
                size="medium"
                name="referredBy"
                id="referredBy"
                fullWidth
                value={formik.values.referredBy}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.referredBy && Boolean(formik.errors.referredBy)}
                helperText={formik.touched.referredBy && formik.errors.referredBy}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Do you have any spefiic skin concerns?"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                id="skinConcerns"
                name="skinConcerns"
                fullWidth
                value={formik.values.skinConcerns}
                onChange={formik.handleChange}
                error={formik.touched.skinConcerns && Boolean(formik.errors.skinConcerns)}
                helperText={formik.touched.skinConcerns && formik.errors.skinConcerns}
              />
            </Grid>
            <Grid item xs={12}>
              <Radios
                name="hadPastElectro"
                label="Have you undergone electrolysis treatments?"
                radioOptions={yesNoOptions}
                value={formik.values.hadPastElectro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.hadPastElectro && Boolean(formik.errors.hadPastElectro)}
                helperText={formik.touched.hadPastElectro && formik.errors.hadPastElectro}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelect
                label="What temporary hair removal methods have you used?"
                name="tempMethodUsed"
                value={formik.values.tempMethodUsed}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.tempMethodUsed && Boolean(formik.errors.tempMethodUsed)}
                fullWidth
                list={tempMethods}
                stateValue={formik.values.tempMethodUsed}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              {!formState ? (
                <Button
                  sx={{height: 54, minWidth: 150}}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                  disabled={isDisabled ? true : false}
                >
                  Submit
                </Button>
              ) : (
                <SuccessBlock msg={formState} />
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default HealthForm

const SuccessBlock = ({msg = ''}) => {
  return (
    <Grid item xs={12}>
      <Typography variant={'h5'} sx={{fontWeight: 700}} align={'center'} mt={2} gutterBottom>
        Thank you!
      </Typography>
      <Typography component="p" variant="body2" align="center">
        {msg}
      </Typography>
    </Grid>
  )
}