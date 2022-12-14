'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategoriesTable = await queryInterface.createTable('PostCategories', { 
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id'
        }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id'
        }
      }
    });
    return PostCategoriesTable;
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories');
  }
};
