const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');
const config = require('../database/config/config');
const { verifyToken } = require('../helpers/jwt');

const sequelize = new Sequelize(config.development);

const createBlogPost = async (title, content, categoryIds, token) => {
  const getUserId = await verifyToken(token);
  const t = await sequelize.transaction();

  const createBlog = await BlogPost.create({ 
    title, 
    content,
    userId: getUserId.id, 
    published: new Date(),
    updated: new Date(),
  }, { transaction: t });

  const getIdCategory = categoryIds.map((catId) => ({
    postId: createBlog.id,
    categoryId: catId,
  }));

  console.log('getIdCategory ===>', getIdCategory);

  await PostCategory.bulkCreate(getIdCategory, { transaction: t });

  await t.commit();
    
  return createBlog;
};

module.exports = { createBlogPost };
