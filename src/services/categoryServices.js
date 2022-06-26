const { Category } = require('../database/models');

const createCategory = async (name) => {
if (!name) {
  return false;   
}
  const newCategoy = await Category.create({ name });
  return newCategoy;
};

const getCaregories = async () => {
  const allCaregories = await Category.findAll();
  return allCaregories;
};

module.exports = { createCategory, getCaregories };
