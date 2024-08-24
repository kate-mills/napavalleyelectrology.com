import React from 'react'
import Divider from '@mui/material/Divider'

import Main from 'layouts/Main'
import Container from 'components/Container'
import Cancellation from 'components/Cancellation'
import {Contact, Gallery, Hero} from './components'

const IndexView = () => (
  <Main colorInvert={true}>
    <Hero />
    <Container>
      <Contact />
    </Container>
    <Divider />
    <Cancellation />
    <Divider />

    <Container>
      <Gallery />
    </Container>
  </Main>
)

export default IndexView
