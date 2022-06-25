const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWTSECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = ({ email, displayName }) => 
    jwt.sign({ email, displayName }, JWTSECRET, jwtConfig);

const verifyToken = async (token) => {
  try {
    const validate = jwt.verify(token, JWTSECRET);
    return validate;
  } catch (error) {
    return false;
  }
};

module.exports = { generateToken, verifyToken };
