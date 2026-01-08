import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from 'components/Container'

const Services = () => {
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
        >Services</Typography>

        <Typography variant="body2" component="p" color="text.secondary" sx={{fontWeight: 400}} align={'center'}>
          Hilary Molloy provides a range of aesthetic services, backed by over ten years of professional experience.  With expertise in plastic surgery and dermatology, she offers comprehensive skin analysis and personalized
          treatments. Her attentive approach is designed to enhance your skin’s health and appearance.
        </Typography>
      </Box>
    </Container>
  )
}

export default Services
