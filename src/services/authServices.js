const { User } = require('../database/models');
const { generateToken } = require('../helpers/jwt');

const authenticate = async ({ email }) => {
  const user = await User.findOne({
      where: { email },
  });     
  console.log(user);
  if (!user) {
      // const error = { status: 400, message: 'Invalid fields' };
      // throw error;
      return false;
  }
  const token = generateToken(user);
  return token;
};
module.exports = { authenticate };