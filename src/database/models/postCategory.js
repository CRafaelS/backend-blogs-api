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
      as:'Category',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey:'categoryId',
    }); 

    models.Category.belongsToMany(models.BlogPost, {
      as:'BlogPost',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey:'postId',
    }); 
  }

  return PostCategoryTable;
};

module.exports = PostCategory;