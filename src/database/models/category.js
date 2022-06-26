'use strict';
const Category = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
    { timestamps: false }
  );

  return CategoryTable;
};

module.exports = Category;