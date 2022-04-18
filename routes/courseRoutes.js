const express = require('express');
const courseontroller = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseontroller.createCourse);
router.route('/').get(courseontroller.getAllCourses);

module.exports = router;
