import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Gallery, Hero  } from './components';

const IndexView = () => (
  <Main colorInvert={true}>
    <Hero />
    <Box bgcolor={'alternate.main'}>
    </Box>
    <Box bgcolor={'primary.main'}>
    </Box>
    <Container> <Contact /> </Container>
    <Container> <Gallery /> </Container>
  </Main>
);

export default IndexView;
