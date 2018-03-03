const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:userId', UserController.getUser);
router.post('/', UserController.postUser);
router.patch('/:userId', UserController.patchUser);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;