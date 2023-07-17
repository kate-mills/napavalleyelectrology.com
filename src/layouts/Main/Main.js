import React from 'react'
import PropTypes from 'prop-types'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import NoSsr from '@mui/material/NoSsr'
import Container from 'components/Container'
import {Topbar, Footer} from './components'

const Main = ({children, colorInvert = false, bgcolor = 'transparent'}) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`)
      if (!element) {
        return
      }
      window.scrollTo({left: 0, top: element.offsetTop, behavior: 'smooth'})
    })
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38
  })

  return (
    <Box id="js--main-top">
      {isMd && <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}></Box>}
      <AppBar
        position={'sticky'}
        sx={{top: 0, backgroundColor: trigger ? theme.palette.background.paper : bgcolor}}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar color={trigger ? 'text.secondary': 'common.white'}/>
        </Container>
      </AppBar>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('js--main-top')}
            role="presentation"
            sx={{position: 'fixed', bottom: 24, right: 32, zIndex: 5501}}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string
}

export default Main
