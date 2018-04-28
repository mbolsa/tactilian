const express = require('express');
const router = express.Router();
const ctrlStudent = require('../controllers/student');

router.get('/', ctrlStudent.student);
module.exports = router;
