import * as React from 'react';
import { Button } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const FilterDrawerButton = ({ onClick }) => (
  <Button
    variant="contained"
    color="primary"
    sx={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      height: 62,
      width: 62,
      borderRadius: '50%',
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <FilterListOutlinedIcon sx={{ bgcolor: 'primary', color: 'white' }} />
  </Button>
);

export default FilterDrawerButton;
