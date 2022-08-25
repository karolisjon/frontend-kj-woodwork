import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import * as React from 'react';

const RadioGroupField = ({
  options,
  value,
  onChange,
}) => (
  <FormControl sx={{ my: 1 }}>
  <Typography variant='h6' component='h2'>Filter by wood type</Typography>
  <RadioGroup
    name="radio-buttons-group"
    value={value}
    options={options}
    onChange={onChange}
  >
    {options.map(({ id, label }) =>
      <FormControlLabel
        key={label}
        id={id}
        value={label}
        control={<Radio />}
        label={label}
      />)
    }
  </RadioGroup>
</FormControl>
)

export default RadioGroupField;
