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
    Electrolysis FAQs
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Search our FAQ for answers about electrolysis with Hilary.
      </Typography>
    </Box>
  );
};

export default Headline;
