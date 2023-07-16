import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

import Link from 'components/Link'
import Logo from 'images/Logo.svg'

const SidebarNav = ({pages}) => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box display={'flex'} component={Link} to="/" title="Napa Valley Electrology" width={{xs: 100, md: 120}}>
          <Box component={'img'} src={Logo} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}></Box>
    </Box>
  )
}

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired
}

export default SidebarNav
