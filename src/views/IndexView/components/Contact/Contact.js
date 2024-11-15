/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {alpha, useTheme} from '@mui/material/styles'

const Contact = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '40%',
          height: '100%',
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(theme.palette.primary.dark, 0.4)} 20%, transparent 20%)`,
          opacity: 0.2
        }
      }}
    >
      <Box position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={1}>
            <Typography
    component={'h3'}
              variant="h4"
              sx={{
                fontWeight: 700
              }}
            >Book Your Appointment Today
            </Typography>
          </Box>
          <Box>
            <Typography component={'h4'} variant="h6" color={'text.secondary'}>Napa Valley Electrology + Skin Care is in Paradigm Medical Aesthetics.
            </Typography>
          </Box>
        </Box>

        <Box marginY={3}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=1920%20Lernhart%20St%20Napa%20CA&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              minHeight: 300,
              borderRadius: 8,
              filter: theme.palette.mode === 'light' ? 'grayscale(0.6) opacity(1)' : 'none'
            }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'body1'} gutterBottom sx={{fontWeight: 'medium'}}>
              Phone:
            </Typography>
             <Box component="a" href="tel:+17073153329" color="inherit">(707) 315-3329</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'body1'} gutterBottom sx={{fontWeight: 'medium'}}>
              Email:
            </Typography>
            <Typography  component={'p'} variant={'subtitle1'}>
    hilary@napavalleyelectrology.com</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'body1'} gutterBottom sx={{fontWeight: 'medium'}}>
              Address:
            </Typography>
            <Typography  component={'p'} variant={'subtitle1'}>
    1920 Lernhart St Napa, CA 94559</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Contact
