import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Box from '@mui/material/Box'

export default function RowRadioButtonsGroup({radioOptions = [], ...props}) {
  return (
    <Box>
      <FormControl
        sx={{
          display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}
        error={props.error}
        required={props.required}
      >
        <FormLabel id={`${props.name.toLowerCase()}-group-label`} sx={{marginInlineStart: '0.9rem'}}>
          {props.label}
        </FormLabel>
        <RadioGroup
          variant="filled"
          row
          {...props}
          aria-labelledby={`${props.name.toLowerCase()}-group-label`}
          error={props.error ? props.error.toString() : 'false'}
        >
          {radioOptions.map((item) => {
            return <FormControlLabel
              key={item}
              value={item}
              control={<Radio />}
              label={item}
              labelPlacement="top"
              />
          })}
        </RadioGroup>
      </FormControl>
      <Box sx={{}}>
        {props.error && props.helperText}
      </Box>
    </Box>
  )
}
