const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');
const config = require('../database/config/config');
const { verifyToken } = require('../helpers/jwt');
const { NEWDATE } = require('mysql2/lib/constants/types');
const { date } = require('joi');

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

  await PostCategory.bulkCreate(categoryIds.map((catId) => ({
    postId: createBlog.id,
    categoryId: catId,
  })), { transaction: t });

  await t.commit();
    console.log(createBlog);
    return createBlog;
};

module.exports = { createBlogPost };
