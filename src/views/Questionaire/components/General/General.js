/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
//import MenuItem from '@mui/material/MenuItem'
//import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'


import {handleSubmitForm} from 'utils/form-helper'

const HealthForm = () => {
  const [formState, setFormState] = useState('')
  const validationSchema = yup.object({
    fullName: yup
      .string()
      .trim()
      .min(2, 'Please enter a valid name')
      .max(50, 'Please enter a valid name')
      .required('Full name is required'),
    email: yup.string().trim().email('Please enter a valid email address').required('Email is required'),
    skinConcerns: yup.string().trim().max(400, 'Please limit your message to 400 characters')
  })

  const GridItemFormBlock = () => {
    const initialValues = {
      fullName: '',
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
          setFormState(`Thank you, ${values.fullName.trim()}.`)
        }
      }
    })
    const isDisabled = !formik.values.fullName || !formik.values.email

    return (
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            formik.handleSubmit()
          }}
          id="questionaire-general"
          name="questionaire-general"
          data-netlify={'true'}
          method="POST"
        >
          <input type="hidden" name="form-name" value="questionaire-general" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{marginBottom: 2}} fontWeight={700}>
                Enter your full name
              </Typography>
              <TextField
                required
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                id="fullName"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{marginBottom: 2}} fontWeight={700}>
                Enter your email
              </Typography>
              <TextField
                required
                label="Email"
                variant="outlined"
                name={'email'}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'subtitle2'} sx={{marginBottom: 2}} fontWeight={700}>
                Do you have specific concerns regarding your skin?
              </Typography>
              <TextField label="Skin concerns" variant="outlined" name={'skinConcerns'} multiline rows={5} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container xs={12}>
              <Box
                display="flex"
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{xs: 'stretched', sm: 'center'}}
                justifyContent={'space-between'}
                width={1}
                margin={'0 auto'}
              >
                <Box marginBottom={{xs: 1, sm: 0}}>
                  <Typography variant={'subtitle2'}>{formState}</Typography>
                </Box>
                <Button size={'large'} variant={'contained'} type={'submit'} disabled={isDisabled ? true : false}>
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    )
  }
  return <GridItemFormBlock />
}

export default HealthForm
