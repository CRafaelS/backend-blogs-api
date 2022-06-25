const userServices = require('../services/userServices');

const postUser = async (req, res) => {
    const token = await userServices.createUser(req.body);
    if (!token) return res.status(409).json({ message: 'User already registered' }); 
    return res.status(201).json({ token });
};

const getAllUser = async (_req, res) => {
  const allUser = await userServices.getAllUser();
  return res.status(200).json(allUser);
};

module.exports = { postUser, getAllUser };
