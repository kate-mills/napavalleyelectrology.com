import React from 'react'
import Box from '@mui/material/Box'

import Link from 'components/Link'
import Logo from 'images/napa-valley-electrology-logo.svg'

const Topbar = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
      <Box
        display={'flex'}
        component={Link}
        to="/"
        title="Napa Valley Electrology & Skin Care"
        width={{xs: 100, md: 120}}
      >
    <Box component={'img'} src={Logo} height={35} sx={{maxWidth: 'fit-content', filter: 'brightness(.9)'}} />
      </Box>
    </Box>
  )
}

export default Topbar
