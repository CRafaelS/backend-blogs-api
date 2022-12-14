const { User } = require('../database/models');
const { generateToken } = require('../helpers/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    where: { email },
});
if (user) {
  return false;   
}
  const newUser = await User.create({ displayName, email, password, image });
  const token = generateToken(newUser);
  return token;
};

const getAllUser = async () => {
  const allUser = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUser;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return false;
  }
  return user;
};

module.exports = { createUser, getAllUser, getUserById }; 

// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ 