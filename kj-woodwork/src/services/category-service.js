const domain = 'http://localhost:8000/products';

const fetchCategories = async () => {
  const response = await fetch(`${domain}/categories`);
  const categories = await response.json();

  return categories;
}

const CategoryService = {
  fetchCategories,
};

export default CategoryService;
