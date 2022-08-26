const domain = 'http://localhost:8000';
const databaseCollection = 'products';

const fetchProducts = async () => {
  const response = await fetch(`${domain}/${databaseCollection}/?_expand=category&_expand=woodType`);
  const products = await response.json();

  return products;
};

const ProductService = {
  fetchProducts,
};

export default ProductService;
