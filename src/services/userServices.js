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

// const getAllUser = async () => {
//   const allUser = await User.findAll();
//   return allUser;
// };

module.exports = { createUser }; 