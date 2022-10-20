import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  FormControl,
  Grid,
  Slider,
  Typography,
} from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './components/product-card';
import AutoCompleteField from '../../components/auto-complete-field';
import RadioGroupField from '../../components/radio-group-field';
import CategoryService from '../../services/category-service';
import WoodTypeService from '../../services/wood-types-service';
import ProductService from '../../services/product-service';
import PaginationControlled from './components/pagination';

const ProductCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = React.useState([]);
  const [woodTypes, setWoodTypes] = React.useState([]);

  const [productsPerPage, setProductsPerPage] = React.useState([]);

  const [price, setPriceRange] = React.useState([0, 1000]);
  const [category, setCategory] = React.useState('');
  const [woodType, setWoodType] = React.useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = React.useState(false);

  const handlePriceSliderChange = (_, newPriceRange) => {
    const [min, max] = newPriceRange;
    searchParams.set('price_gte', min);
    searchParams.set('price_lte', max);
    setSearchParams(searchParams);
    setPriceRange(newPriceRange);
  };

  const handleCategoriesChange = (_, newCategory) => {
    searchParams.set('categoryId', newCategory.id);
    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const handleWoodTypesChange = (_, newWoodType) => {
    searchParams.set('woodTypeId', newWoodType);
    setSearchParams(searchParams);
    setWoodType(newWoodType);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedWoodTypes] = await Promise.all([
        CategoryService.fetchCategories(),
        WoodTypeService.fetchWoodTypes(),
      ]);

      setCategories(fetchedCategories);
      setWoodTypes(fetchedWoodTypes);
    })();
  }, []);

  const handleFetchProducts = async () => {
    const fetchedProcuts = await ProductService.fetchProducts();
    setProductsPerPage(fetchedProcuts.data);
  };

  React.useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <>
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
      <Drawer
        anchor="left"
        variant="temporary"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(!filterDrawerOpen)}
        sx={{ zIndex: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'calc(100vh - 64px)',
            gap: 6,
            p: 4,
          }}
        >
          <Box sx={{
            display: 'flex', justifyContent: 'row', alignItems: 'center', gap: 2,
          }}
          >
            <FilterListOutlinedIcon fontSize="large" />
            <Typography variant="h3" component="h1">Filters</Typography>
          </Box>
          <Divider />

          <FormControl sx={{ my: 1 }}>
            <Typography variant="h6" component="h2">Filter by categories</Typography>
            <AutoCompleteField
              options={categories}
              value={category}
              onChange={handleCategoriesChange}
              getOptionLabel={({ title }) => title || ''}
            />
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant="h6" component="h2">Filter by price</Typography>
            <Box sx={{ mx: '2' }}>
              <Slider
                min={0}
                max={1000}
                value={price}
                onChange={handlePriceSliderChange}
                valueLabelDisplay="on"
                sx={{ width: '300px', height: '0.1em', mt: 4 }}
              />
            </Box>
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant="h6" component="h2">Filter by wood type</Typography>
            <RadioGroupField
              options={woodTypes}
              value={woodType}
              onChange={handleWoodTypesChange}
            />
          </FormControl>

        </Box>
      </Drawer>

      <Container maxWidth="md">
        <Grid container spacing={2} sx={{ py: 4, px: 3 }}>
          {productsPerPage.map(({
            id,
            title,
            description,
            price: productPrice,
            img,
            category: productCategory,
            woodType: productWoodType,
          }) => (
            <Grid
              id={id}
              key={id}
              item
              alignItems="stretch"
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={4}
              sx={{ mb: 1 }}
            >
              <ProductCard
                id={id}
                title={title}
                description={description}
                price={productPrice}
                img={img}
                category={productCategory.title}
                woodType={productWoodType.title}
              />
            </Grid>
          ))}
        </Grid>

        <PaginationControlled setProductsPerPage={(products) => setProductsPerPage(products)} />
      </Container>
    </>
  );
};

export default ProductCatalog;
