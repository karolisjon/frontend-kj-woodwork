import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteField = ({
  options,
  value,
  onChange,
}) => (
  <Autocomplete
    options={options}
    value={value}
    onChange={onChange}
    renderInput={({
      InputLabelProps,
      InputProps,
      inputProps,
      id,
      fullWidth,
    }) => (
      <TextField
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        inputProps={inputProps}
        id={id}
        variant="standard"
        fullWidth={fullWidth}
      />
    )}
    sx={{ width: '300px' }}
  />
);

export default AutoCompleteField;
