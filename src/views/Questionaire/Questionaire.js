/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

import {General} from './components'

import Container from 'components/Container'

const Account = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={4}>


          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              General Hygine
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
              Please read our{' '}
              <Link color={'primary'} href={'#'} underline={'none'}>
                terms of use{' '}
              </Link>
              to be informed how we manage your private data.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}> <General /> </Grid>
        </Grid>
        <Divider sx={{marginY: 4}} />
        <Divider sx={{marginY: 4}} />

        <Divider sx={{marginY: 4}} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
    </Grid>
          <Grid item xs={12} md={8}>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Account
