const domain = 'http://localhost:8000';

const fetchWoodTypes = async () => {
  const response = await fetch(`${domain}/woodtypes`);
  const woodTypes = await response.json();

  return woodTypes;
};

const WoodTypeService = {
  fetchWoodTypes,
};

export default WoodTypeService;
