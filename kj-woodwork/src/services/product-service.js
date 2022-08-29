const domain = 'http://localhost:8000';
const databaseCollection = 'products';
const relationsParams = '_expand=category&_expand=woodType';

const fetchProducts = async () => {
  const response = await fetch(`${domain}/${databaseCollection}/?${relationsParams}`);
  const products = await response.json();

  return products;
};

const fetchProductById = async (id) => {
  const response = await fetch(`${domain}/${databaseCollection}/${id}?${relationsParams}`);
  const product = await response.json();

  return product;
};

const ProductService = {
  fetchProducts,
  fetchProductById,
};

export default ProductService;
