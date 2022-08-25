import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system';
import * as React from 'react';
import ItemCard from './components/item-card';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

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

const ProductCatalog = () => {
  const [items, setItems] = React.useState([]);
  const [price, setPriceRange] = React.useState([0, 1000]);
  const [category, setCategory] = React.useState('');
  const [woodType, setWoodType] = React.useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(fetchedItems => setItems(fetchedItems))
  }, []);

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('Products, cartPageContext: ', cartPageContext);

  return (
    <>
      <Button
        variant='contained'
        color='primary'
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
        <FilterListOutlinedIcon sx={{ bgcolor: 'primary', color: 'white', }} />
      </Button>

        <Drawer
          anchor='left'
          variant='temporary'
          open={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(!filterDrawerOpen)}
          sx={{ zIndex: 1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: `calc(100vh - 64px)`,
              gap: 6,
              p: 4,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'row', alignItems: 'center', gap: 2 }}>
              <FilterListOutlinedIcon fontSize='large' />
              <Typography variant='h3' component='h1'>Filters</Typography>
            </Box>
            <Divider></Divider>

            <FormControl sx={{ my: 1 }}>
              <Typography variant='h6' component='h2'>Filter by categories</Typography>
              <Autocomplete
                options={categories}
                value={category}
                onChange={(_, newCategory) => setCategory(newCategory)}
                renderInput={(params) => <TextField {...params} label={categories.label} variant='standard' />}
                sx={{ width: '300px' }}
              />
            </FormControl>

            <FormControl sx={{ my: 1 }}>
              <Typography variant='h6' component='h2'>Filter by price</Typography>
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
              <Typography variant='h6' component='h2'>Filter by wood type</Typography>
              <RadioGroup
                name="radio-buttons-group"
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
          </Box>
        </Drawer>

        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ py: 4, px: 3 }}>
            {items.map(item => (
              <Grid
                id={item.id}
                key={item.id}
                item
                alignItems='stretch'
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{ mb: 1 }}
              >
                <ItemCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  )
}

export default ProductCatalog;
