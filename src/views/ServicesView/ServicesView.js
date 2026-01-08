import React from 'react'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import Main from 'layouts/Main'
import Container from 'components/Container'
import Cancellation from 'components/Cancellation'
import {Content, Footer, Headline} from './components'

const ServicesView = () => {
  const theme = useTheme()
  return (
    <Main colorInvert={false}>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
          <Content />

        <Divider />
        <Box>
          <Cancellation />
        </Box>
        <Divider />
        <Box bgcolor={theme.palette.primary[800]}>
          <Container>
            <Footer />
          </Container>
        </Box>
      </Box>
    </Main>
  )
}

export default ServicesView 
