const { Op } = require('sequelize');
const { Category } = require('../database/models');

const validateTitleAndContent = (req, res, next) => {
  const { title, content } = req.body;
  if (title.length === 0 || content.length === 0) {
    return res.status(400).json({ 
      message: 'Some required fields are missing',
    });
  }
  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const hascategory = await Category.findOne({
    where: {
      id: {
        [Op.or]: [categoryIds],
      },
    },
  });

  console.log('hascategory ====> ', hascategory);
  next();
};

module.exports = { validateTitleAndContent, validateCategoryId };