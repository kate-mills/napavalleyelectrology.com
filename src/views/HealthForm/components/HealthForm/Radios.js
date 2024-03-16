import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Box from '@mui/material/Box'

export default function RowRadioButtonsGroup({radioOptions = [], ...props}) {
  const labelStyles = {
    background: 'white',
    width: 'fit-content',
    paddingX: '4px',
    overflow: 'hidden',
    transformOrigin: 'top left',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(133% - 32px)',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    userSelect: 'none',
    transform: 'translate(14px, -9px) scale(0.75)'
  }
  return (
    <Box>
      <FormControl
        sx={{border: `1px solid ${props.error ? '#d32f2fed' : '#c4c4c4'}`, borderRadius: 1, padding: 1}}
        fullWidth
        error={props.error}
      >
        <FormLabel id={`${props.name.toLowerCase()}-group-label`} sx={{...labelStyles}} shrink={true}>
          {props.label}
        </FormLabel>
        <RadioGroup
          variant="filled"
          row
          aria-labelledby={`${props.name.toLowerCase()}-group-label`}
          {...props}
          error={props.error ? props.error.toString() : 'false'}
        >
          {radioOptions.map((item) => {
            return <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
          })}
        </RadioGroup>
      </FormControl>
      <Box sx={{transform: 'translate(0, -2px) scale(0.75)', color: '#d63e3e', position: 'absolute'}}>
        {props.error && props.helperText}
      </Box>
    </Box>
  )
}
