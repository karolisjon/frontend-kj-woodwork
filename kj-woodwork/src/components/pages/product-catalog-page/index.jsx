import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  Grid,
  Slider,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system';
import ProductCard from './components/product-card';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import AutoCompleteField from '../../auto-complete-field';
import RadioGroupField from '../../radio-group-field';
import CategoryService from '../../../services/category-service';
import WoodTypeService from '../../../services/wood-types-service';
// import CartPageContext from '../../../contexts/cart-page-context';

const ProductCatalog = () => {
  const [categories, setCategories] = React.useState([]);
  const [woodTypes, setWoodTypes] = React.useState([]);

  const [products, setProducts] = React.useState([]);
  const [price, setPriceRange] = React.useState([0, 1000]);
  const [category, setCategory] = React.useState('');
  const [woodType, setWoodType] = React.useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedWoodTypes] = await Promise.all([
        CategoryService.fetchCategories(),
        WoodTypeService.fetchWoodTypes(),
      ]);

      setCategories(fetchedCategories);
      setWoodTypes(fetchedWoodTypes);
    })()
  }, []);

  React.useEffect(() => {
    fetch('http://localhost:8000/products/?_expand=category&_expand=woodType')
      .then(res => res.json())
      .then(fetchedProducts => setProducts(fetchedProducts))
  }, []);

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('Products, cartPageContext: ', cartPageContext);

  // console.log(products[0].woodType.label);

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
            <AutoCompleteField
              options={categories}
              value={category}
              onChange={(_, newCategory) => setCategory(newCategory)}
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
            <RadioGroupField
              options={woodTypes}
              value={woodType}
              onChange={(_, newWoodType) => setWoodType(newWoodType)}
            />
          </FormControl>
        </Box>
      </Drawer>

      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ py: 4, px: 3 }}>
          {products.map(product => (
            <Grid
              id={product.id}
              key={product.id}
              item
              alignItems='stretch'
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ mb: 1 }}
            >
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.img}
                category={product.category.label}
                // woodType={product.woodType.label}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ProductCatalog;

