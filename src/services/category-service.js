const domain = 'http://localhost:8000';
const databaseCollection = 'api/categories';

const fetchCategories = async () => {
  const response = await fetch(`${domain}/${databaseCollection}`);
  const categories = await response.json();

  return categories;
};

const CategoryService = {
  fetchCategories,
};

export default CategoryService;
