const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWTSECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = ({ email, displayName }) => 
    jwt.sign({ email, displayName }, JWTSECRET, jwtConfig);

module.exports = { generateToken };
