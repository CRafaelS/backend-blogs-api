const express = require('express');
const blogPostController = require('../controller/blogPostController');

const blogPostRouter = express.Router();

blogPostRouter.post('/', blogPostController.createBlogPost);

module.exports = blogPostRouter;