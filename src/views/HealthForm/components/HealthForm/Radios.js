import * as React from 'react'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RowRadioButtonsGroup({radioOptions = [], ...props}) {
  const labelStyles = {
    display: 'block',
    transformOrigin: 'top left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(133% - 32px)',
    transform: 'translate(0px, -9px) scale(0.75)',
    paddingX: 0,
  }
  return (
    <FormControl fullWidth sx={{border: '0.1rem solid gray',borderRadius:1,paddingX:1,background:'white'}}>
      <FormLabel id={`${props.name.toLowerCase()}-group-label`} sx={{...labelStyles}}>
    <Box component="span" sx={{backgroundColor: 'white'}} paddingX={1}> {props.label} </Box>
      </FormLabel>
      <RadioGroup row aria-labelledby={`${props.name.toLowerCase()}-group-label`} {...props} border={'1px solid gray'}>
        {radioOptions.map(item => {
          return <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        })}
      </RadioGroup>
    </FormControl>
  )
}
