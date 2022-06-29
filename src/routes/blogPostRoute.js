const express = require('express');
const blogPostController = require('../controller/blogPostController');
const { validateTitleAndContent, validateCategoryId } = require('../middleware/validateBlogPost');

const blogPostRouter = express.Router();

blogPostRouter.post('/', validateTitleAndContent, validateCategoryId,
 blogPostController.createBlogPost);

module.exports = blogPostRouter;