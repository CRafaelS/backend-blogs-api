const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
  // const { name } = req.body;
  const newCategoy = await categoryServices.createCategory(req.body);
  if (!newCategoy) return res.status(400).json({ message: '"name" is required' }); 
  return res.status(201).json(newCategoy);
};

module.exports = { createCategory };
