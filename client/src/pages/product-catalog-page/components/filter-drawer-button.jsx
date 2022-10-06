import * as React from 'react';
import { Button } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const FilterDrawerButton = ({ filterDrawerOpen, setFilterDrawerOpen }) => (
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
    onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
  >
    <FilterListOutlinedIcon sx={{ bgcolor: 'primary', color: 'white' }} />
  </Button>
);

export default FilterDrawerButton;
