import React from 'react'
import Box from '@mui/material/Box'
import Link from 'components/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Topbar = ({color = 'secondary'}) => {
  return (
    <Box
      display={'flex'}
    flexWrap={{
      xs: 'wrap',
        sm: 'nowrap'
    }}
      justifyItems={'space-between'}
      width={'100%'}
      alignItems={'center'}
    >
      <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={{ xs: 'left', sm: 'flex-start' }}mt={1}>
      <Box component={Link} to="/" title="Napa Valley Electrology & Skin Care" color={color}>
          <Typography variant={'body2'} fontWeight={600} color={color} mr={1}>
            {'Napa Valley Electrology + Skin Care'}
          </Typography>
        </Box>
      </Box>

      <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={{ xs: 'left', sm: 'flex-end' }}mt={1}>
        <Box>
          <Button component={Link} variant={'contained'} to="/health-form" color={color}>Health Form</Button>
        </Box>
        <Box ml={1}>
          <Button component={Link} variant={'contained'} to="/faq" color={color}>FAQs</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Topbar
