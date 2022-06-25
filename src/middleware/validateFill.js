const validateEmail = (req, res, next) => {
  const validEmail = /\S+@\S+\.\S+/;
  const { email } = req.body;
  
  if (!validEmail.test(email)) { 
  res.status(400).json({ message: '"email" must be a valid email' }); 
  }
  
  if (!email || email === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validatePassWord = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

module.exports = { validateEmail, validatePassWord };