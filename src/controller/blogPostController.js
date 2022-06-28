const blogPostServices = require('../services/blogPostServices');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const newBlogPost = await blogPostServices.createBlogPost(title, content, categoryIds, token); 
  return res.status(201).json(newBlogPost);
};

module.exports = { createBlogPost };
