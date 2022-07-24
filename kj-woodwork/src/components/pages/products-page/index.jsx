import {
  Autocomplete,
  Box,
  // Divider,
  FormControl,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'

const categories = [
  {
    id: '1',
    label: 'Furniture'
  },
  {
    id: '2',
    label: 'Accessories'
  },
  {
    id: '3',
    label: 'Kitchen utensils'
  },
];

const Products = () => {
  const [price, setPriceRange] = React.useState([0, 1000]);
  const [category, setCategory] = React.useState('');

  return (
    <Box >
      <Container sx={{ display: 'flex', gap: 6 }} >
        <FormControl sx={{ my: 1 }}>
          <Typography>Categories</Typography>
          <Autocomplete
            options={categories}
            value={category}
            onChange={(_, newCategory) => setCategory(newCategory)}
            renderInput={(params) => <TextField {...params} label={categories.label}/>}
            sx={{ width: '300px' }}
          />
        </FormControl>

        <FormControl sx={{ my: 1}}>
          <Typography>Price</Typography>
          <Box sx={{ mx: '2' }}>
            <Slider
              min={0}
              max={1000}
              value={price}
              onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
              valueLabelDisplay="on"
              sx={{ width: '300px', mt: 4 }}
            />
          </Box>


        </FormControl>

      </Container>
    </Box>
  )
}

export default Products;
