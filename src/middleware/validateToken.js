const { verifyToken } = require('../helpers/jwt');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const compareToken = await verifyToken(token);
  if (!compareToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = { validateToken };