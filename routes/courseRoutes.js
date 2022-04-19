const express = require('express');
const courseontroller = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseontroller.createCourse);
router.route('/').get(courseontroller.getAllCourses);
router.route('/:slug').get(courseontroller.getCourses);

module.exports = router;
