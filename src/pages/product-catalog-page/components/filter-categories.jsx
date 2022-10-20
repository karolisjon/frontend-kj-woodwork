import * as React from 'react';
import { FormControl, Typography } from '@mui/material';
import AutoCompleteField from '../../../components/auto-complete-field';

const FilterCategories = () => (
  <FormControl sx={{ my: 1 }}>
    <Typography variant="h6" component="h2">Filter by categories</Typography>
    <AutoCompleteField
      // options={categories}
      // value={category}
      // onChange={handleCategoriesChange}
      getOptionLabel={({ title }) => title || ''}
    />
  </FormControl>
);

export default FilterCategories;
