/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import guide from 'images/the-guide.jpg'

const Footer = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          sx={{
            color: 'primary.contrastText',
            fontWeight: 'medium'
          }}
        >
          Didn't find what you are looking for?
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{xs: 'column', sm: 'row'}}
        justifyContent={'center'}
        alignItems={{xs: 'stretched', sm: 'center'}}
      >
        <Button
          component={'a'}
          href={guide}
          download
          variant="contained"
          color="primary"
          size="large"
          fullWidth={!isMd}
          startIcon={
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          }
        >
          <Box component="span">
            <Typography color="primary.contrastText">Download the guide</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer
