import React from 'react'
import Box from '@mui/material/Box'

import Link from 'components/Link'
import Logo from 'images/Logo.svg'

const Topbar = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1} p={1}>
      <Box
        display={'flex'}
        component={Link}
        to="/"
        title="Napa Valley Electrology & Skin Care"
        width={{xs: 100, md: 120}}
      >
        <Box component={'img'} src={Logo} height={35} sx={{maxWidth: 'fit-content'}} />
      </Box>
      <Box sx={{display: {xs: 'none', md: 'flex'}}} alignItems={'center'}>
    <Box component={'a'} sx={{color: 'primary.dark', textDecoration: 'none'}}href="tel:+7073153329">(707) 315-3329</Box>
    </Box>
    </Box>
  )
}

export default Topbar
