const express = require('express');
const { register, login, forgotPassword, resetPassword, updateProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware'); // Middleware to protect routes
const router = express.Router();

// @desc    Register new user (Signup)
// @route   POST /api/auth/signup
router.post('/signup', register);

// @desc    Login user
// @route   POST /api/auth/login
router.post('/login', login);

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
router.post('/forgot-password', forgotPassword);

// @desc    Reset password
// @route   PUT /api/auth/reset-password/:resetToken
router.put('/reset-password/:resetToken', resetPassword);

// @desc    Update user profile
// @route   PUT /api/auth/update-profile
router.put('/update-profile', protect, updateProfile); // Protect this route

module.exports = router;

