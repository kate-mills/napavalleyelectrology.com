import React from 'react'
import Box from '@mui/material/Box'
import Link from 'components/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Topbar = ({color = 'secondary', colorInvert = false}) => {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      pt={1}
    >
      <Box display={'flex'} justifyContent={'flex-start'}>
        <Box mb={1} component={Link} to="/" title="Napa Valley Electrology & Skin Care">
          <Typography variant={'body2'} component={'h1'} mr={1} fontWeight={600} color={!!colorInvert ? '#FFFFFF' : color}>
            {'NV Electrology + Skin Care'}
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'}>
        <Box>
          <Button component={Link} variant={'contained'} to="/faq" color={color}>
            FAQs
          </Button>
        </Box>
        <Box ml={1}>
          <Button component={Link} variant={'contained'} to="/services" color={color}>
            SERVICES
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Topbar
