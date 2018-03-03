const express = require('express');

const BlogController = require('../controllers/blog');

const router = express.Router();

router.get('/', BlogController.getBlogs);
router.get('/:blogId', BlogController.getBlog);
router.post('/', BlogController.postBlog);
router.patch('/:blogId', BlogController.patchBlog);
router.delete('/:blogId', BlogController.deleteBlog);

module.exports = router;