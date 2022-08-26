const domain = 'http://localhost:8000';
const databaseCollection = 'products';
const relationsParams = '_expand=category&_expand=woodType';

const fetchProducts = async () => {
  const response = await fetch(`${domain}/${databaseCollection}/?${relationsParams}`);
  const products = await response.json();

  return products;
};

const ProductService = {
  fetchProducts,
};

export default ProductService;
