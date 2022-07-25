import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
// import CartPageContext from '../../../contexts/cart-page-context';

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

const materials = [
  {
    id: '1',
    label: 'Maple'
  },
  {
    id: '2',
    label: 'Oak'
  },
  {
    id: '3',
    label: 'Cherry'
  },
];

const Products = () => {
  const [price, setPriceRange] = React.useState([0, 1000]);
  const [category, setCategory] = React.useState('');
  const [woodType, setWoodType] = React.useState('');

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('Products, cartPageContext: ', cartPageContext);

  return (
    <Box >
      <Container sx={{ display: 'flex', gap: 6 }} >
        <FormControl sx={{ my: 1 }}>
          <Typography>Categories</Typography>
          <Autocomplete
            options={categories}
            value={category}
            onChange={(_, newCategory) => setCategory(newCategory)}
            renderInput={(params) => <TextField {...params} label={categories.label} />}
            sx={{ width: '300px' }}
          />
        </FormControl>

        <FormControl sx={{ my: 1 }}>
          <Typography>Price</Typography>
          <Box sx={{ mx: '2' }}>
            <Slider
              min={0}
              max={1000}
              value={price}
              onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
              valueLabelDisplay="on"
              sx={{ width: '300px', height: '0.1em', mt: 4 }}
            />
          </Box>
        </FormControl>

        <FormControl sx={{ my: 1 }}>
          <FormLabel id="demo-radio-buttons-group-label">Type of wood</FormLabel>
          <RadioGroup
            name="radio-buttons-group"
            sx={{ display: 'flex', flexDirection: 'row' }}
            value={woodType}
            onChange={(_, newWoodType) => setWoodType(newWoodType)}
          >
            {materials.map(({ id, label }) =>
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

      </Container>
    </Box>
  )
}

export default Products;
