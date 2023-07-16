import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'components/Link'
import Logo from 'images/Logo.svg'

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{xs: 'column', sm: 'row'}}
        >
          <Box display={'flex'} component={Link} to="/" title="Napa Valley Electrology & Skin Care" width={80}>
            <Box component={'img'} src={Logo} height={25} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button variant="outlined" color="primary" component={'a'} href="tel:+7073153329" size="small">(707) 315-3329</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
          Napa Valley Electrology & Skin Care
        </Typography>
        <Typography align={'center'} variant={'caption'} color="text.secondary" component={'p'}>
          Providing ELECTROLYSIS Permanent Hair Removal,corrective SKIN CARE, LASH EXTENSIONS, WAXING & TINTING
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
