const authService = require('../services/authServices');

const postLogin = async (req, res) => {
    const token = await authService.authenticate(req.body);
    if (!token) { return res.status(400).json({ message: 'Invalid fields' }); }
    return res.status(200).json({ token });
};

module.exports = { postLogin };
