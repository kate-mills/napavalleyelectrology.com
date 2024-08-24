import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

const Cancellation = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700
          }}
        >
          Cancellation Policy
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{fontWeight: 400}} align={'center'}>
          {' '}
          Please provide a minimum of 24 hours notice for cancellation and rescheduling of appointments.
        </Typography>

        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{fontWeight: 400}}
          align={'center'}
          gutterBottom
        >
          For same-day (or less than 24hrs notice) cancellation there is a fee of 50% of the treatment cost.
        </Typography>
        <Typography variant="body2" component="p" color="text.secondary" sx={{fontWeight: 400}} align={'center'}>
          The no-show fee is 100% of the treatment cost plus a prepaid deposit to reserve future appointments.
        </Typography>
      </Box>
    </Container>
  )
}

export default Cancellation
