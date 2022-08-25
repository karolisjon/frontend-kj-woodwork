const domain = 'http://localhost:8000/';

const fetchProduct = async () => {
  const response = await fetch(`${domain}/products/?_expand=category&_expand=wood`);
  const categories = await response.json();

  return categories;
};

const ProductService = {
  fetchProduct,
};

export default ProductService;

