import React from 'react'
import Box from '@mui/material/Box'
import Link from 'components/Link'

const Topbar = ({color="common.white"}) => {
  return (
    <Box display={'flex'} width={1}>
      <Box
        display={'flex'}
        component={Link}
        to="/"
        title="Napa Valley Electrology & Skin Care"
        color={color}
      >{'Napa Valley Electrology + Skin Care'}</Box>
    </Box>
  )
}

export default Topbar
