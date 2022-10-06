/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteField = ({
  options,
  value,
  onChange,
  ...props
}) => (
  <Autocomplete
    options={options}
    value={value}
    onChange={onChange}
    {...props}
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
