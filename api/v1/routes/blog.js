const express = require('express');

const BlogController = require('../controllers/blog');
const isAuthenticated = require('../../../middlewares/is-authenticated');

const router = express.Router();

router.get('/', isAuthenticated, BlogController.getBlogs);
router.get('/:blogId', isAuthenticated, BlogController.getBlog);
router.post('/', isAuthenticated, BlogController.postBlog);
router.patch('/:blogId', isAuthenticated, BlogController.patchBlog);
router.delete('/:blogId', isAuthenticated, BlogController.deleteBlog);

module.exports = router;