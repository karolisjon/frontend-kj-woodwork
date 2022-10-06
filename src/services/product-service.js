const domain = 'http://localhost:8000';
const databaseCollection = 'api/products';
const relationsParams = 'joinBy=categoryId&joinBy=woodTypeId';

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
