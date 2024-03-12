import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks({label="label", list=[], stateValue=[], ...props}) {


  return (
      <FormControl fullWidth>
        <InputLabel id={props.name} shrink={true} sx={{background: 'white', paddingX: 0.5}}>{label}</InputLabel>
        <Select
          labelId={props.name}
          id={props.name}
          name={props.name}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          multiple
          {...props}
        >
          {list.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={stateValue.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
