const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategoy = await categoryServices.createCategory(name);
  if (!newCategoy) return res.status(400).json({ message: '"name" is required' }); 
  return res.status(201).json(newCategoy);
};

const getAllCategories = async (_req, res) => {
  const allCaregories = await categoryServices.getCaregories();
  return res.status(200).json(allCaregories);
}

module.exports = { createCategory, getAllCategories };
