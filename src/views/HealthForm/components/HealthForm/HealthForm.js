/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'components/Link'
import {useTheme} from '@mui/material/styles'

import {handleSubmitForm} from 'utils/form-helper'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('First name is required.'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Last name is required'),
  email: yup.string().trim().email('Please enter a valid email address').required('Email is required.'),
  skinConcerns: yup.string().trim().max(400, 'Please limit your message to 400 characters')
})

const HealthForm = () => {
  const theme = useTheme()

  const [formState, setFormState] = useState('')

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    skinConcerns: ''
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
          `Thank you, ${values.firstName.trim()}, for taking the time to provide me with your health information. I value your input and look forward to treating you in my office soon.`
        )
      }
    }
  })
  const isDisabled = !formik.values.firstName || !formik.values.lastName || !formik.values.email

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography variant={'h3'} sx={{fontWeight: 700}} align={'center'} gutterBottom>
          {!formState ? 'Health Questionnaire' : 'Success'}
        </Typography>
        <Typography color="text.secondary" align={formState ? 'left' : 'center'}>
          {formState || 'Please answer the following questions to the best of your knowledge & ability.'}
        </Typography>

        {formState && (
          <Box mt={3}>
            <Typography variant="body1" gutterBottom textAlign="center" color="text.secondary">
              {"If you'd like to schedule, "}
              <Box component={'a'} href={`sms://+14159881102`} color="text.secondary">
                send me a SMS message
              </Box>
              {'.'}
            </Typography>
          </Box>
        )}
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
        >
          <input type="hidden" name="form-name" value="health-form" />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{height: 54}}
                  label="First name *"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{height: 54}}
                  label="Last name *"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{height: 54}}
                  label="Email *"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  name="skinConcerns"
                  fullWidth
                  value={formik.values.skinConcerns}
                  onChange={formik.handleChange}
                  error={formik.touched.skinConcerns && Boolean(formik.errors.skinConcerns)}
                  helperText={formik.touched.skinConcerns && formik.errors.skinConcerns}
                />
              </Grid>
              <Grid item container justifyContent={'center'} xs={12}>
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
              </Grid>
              <Grid item container justifyContent={'center'} xs={12}>
                <Typography color="text.secondary">{formState}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container justifyContent={'center'} xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking "submit," you agree to our{' '}
                    <Box
                      component={Link}
                      to="/company-terms"
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                      sx={{textDecoration: 'underline'}}
                    >
                      Privacy Policy
                    </Box>
                    {', '}
                    <Box
                      component={Link}
                      to="/company-terms"
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                      sx={{textDecoration: 'underline'}}
                    >
                      Data Policy
                    </Box>
                    <Box component="span" sx={{display: 'inline-block', marginRight: '2px'}}>
                      {', and'}
                    </Box>{' '}
                    <Box
                      component={Link}
                      to="/company-terms"
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                      sx={{textDecoration: 'underline'}}
                    >
                      Cookie Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default HealthForm
