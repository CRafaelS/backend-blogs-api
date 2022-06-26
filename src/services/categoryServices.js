const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
if (!name) {
  return false;   
}
  const newCategoy = await Category.create({ name });
  return newCategoy;
};

module.exports = { createCategory };