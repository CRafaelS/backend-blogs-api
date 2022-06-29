const { Op } = require('sequelize');
const { PostCategory } = require('../database/models');

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
  const hascategory = await PostCategory.findOne({
    where: {
      categoryId: {
        [Op.and]: [categoryIds],
      },
    },
  });

  console.log('<<<<<<<hascategory>>>>>>>>>>>', hascategory);
  if (hascategory === null) {
    console.log('chegueiiiiiiiii <<<<<<<>>>>>>>>>>>>>>');
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = { validateTitleAndContent, validateCategoryId };