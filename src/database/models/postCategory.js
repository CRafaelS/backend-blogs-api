'use strict';
const PostCategory = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
    { timestamps: false }
  );

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as:'categories',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey:'postId',
    }); 

    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey:'categoryId',
    }); 
  }

  return PostCategoryTable;
};

module.exports = PostCategory;