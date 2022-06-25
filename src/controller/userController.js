const userServices = require('../services/userServices');

const postUser = async (req, res) => {
    const token = await userServices.createUser(req.body);
    if (!token) return res.status(409).json({ message: 'User already registered' }); 
    return res.status(201).json({ token });
};

// const get
module.exports = { postUser };