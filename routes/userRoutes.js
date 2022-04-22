const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/singup').post(authController.createUser); // http://localhost:3000/users/singup
module.exports = router;
