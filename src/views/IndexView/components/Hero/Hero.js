import React, {useEffect} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import HeroImg from 'images/electrolysis.webp'
import Container from 'components/Container'

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax')
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return
      }
      const {jarallax} = await import('jarallax')
      jarallax(jarallaxElems, {speed: 0.2})
    }
    jarallaxInit()
  })

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{xs: 400, sm: 500, md: 600}}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom !important',
          backgroundImage: `url(${HeroImg})`,
          filter: 'brightness(0.5)'
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            component={'h1'}
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'primary.light',
              textTransform: 'uppercase'
            }}
          >Electrology + Skin Care
          </Typography>
          <Typography variant="h5" component="h2" sx={{color: 'primary.light'}}>
            Permanent hair removal via electrolysis + clinical skin care treatments. Gender Affirming and surgery prep
            services provided with compassion and understanding.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
