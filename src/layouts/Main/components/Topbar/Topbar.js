import React from 'react'
import Box from '@mui/material/Box'
import Link from 'components/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Topbar = ({color = 'secondary'}) => {
  return (
    <Box display={'flex'} flexWrap={'nowrap'} justifyItems={'space-between'} alignItems={'center'} width={'100%'} pt={1}>

      <Box display={'flex'} justifyItems={'flex-start'} width={'100%'}>
        <Box component={Link} to="/" title="Napa Valley Electrology & Skin Care" color={color}>
          <Typography variant={'body2'} fontWeight={600} color={color}>{'Napa Valley Electrology + Skin Care'}</Typography>
        </Box>
      </Box>

      <Box display={'flex'} justifyItems={'flex-end'}>
        <Box component={Link} to="/faq">
          <Button variant={'contained'} color={color} component={Link}>FAQs</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Topbar
