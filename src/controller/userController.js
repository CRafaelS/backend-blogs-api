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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  console.log('retorno do byId', user.attributes);
  return res.status(200).json(user);
};

module.exports = { postUser, getAllUser, getUserById };
