const domain = 'http://localhost:8000';
const databaseCollection = 'api/products';
const relationsParams = 'joinBy=categoryId&joinBy=woodTypeId';

const fetchProducts = async ({ from, to }) => {
  const response = await fetch(`${domain}/${databaseCollection}/?${relationsParams}`);
  const products = await response.json();

  const productsPerPage = new Promise((resolve) => {
    const data = products.slice(from, to);

    resolve({
      count: products.length,
      data,
    });
  });

  return productsPerPage;
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
