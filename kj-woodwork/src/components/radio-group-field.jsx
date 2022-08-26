import * as React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const RadioGroupField = ({
  options,
  value,
  onChange,
}) => (
  <FormControl sx={{ my: 1 }}>
    <RadioGroup
      name="radio-buttons-group"
      options={options}
      value={value}
      onChange={onChange}
    >
      {options.map(({ id, label }) => (
        <FormControlLabel
          key={label}
          id={id}
          value={label}
          control={<Radio />}
          label={label}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadioGroupField;
