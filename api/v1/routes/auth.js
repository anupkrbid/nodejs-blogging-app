const express = require('express');

const AuthController = require('../controllers/auth');

const router = express.Router();

router.post('/sign-up', AuthController.signUp);
router.post('/sign-in', AuthController.signIn);
router.post('/sign-out', AuthController.signOut);
router.post('/email-taken', AuthController.emailTaken);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);

module.exports = router;