const express = require('express');
const courseontroller = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseontroller.createCourse);

module.exports = router;
