const domain = 'http://localhost:8000';
const databaseCollection = 'products';

const fetchProduct = async () => {
  const response = await fetch(`${domain}/${databaseCollection}/?_expand=category&_expand=woodType`);
  const categories = await response.json();

  return categories;
};

const ProductService = {
  fetchProduct,
};

export default ProductService;
