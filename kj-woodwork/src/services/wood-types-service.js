const domain = 'http://localhost:8000';
const databaseCollection = 'woodtypes';

const fetchWoodTypes = async () => {
  const response = await fetch(`${domain}/${databaseCollection}`);
  const woodTypes = await response.json();

  return woodTypes;
};

const WoodTypeService = {
  fetchWoodTypes,
};

export default WoodTypeService;
