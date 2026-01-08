import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >electrolysis + clinical skin care
      </Typography>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        Services
      </Typography>
      <Typography variant="h6" component={'h3'} align={'center'} color={'textSecondary'}>
        To book, call Hilary at (707) 315-3329.
      </Typography>
    </Box>
  );
};

export default Headline;
