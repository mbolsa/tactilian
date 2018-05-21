const express = require('express');
const router = express.Router();
const ctrlActivity = require('../controllers/activity_student');

router.get('/', ctrlActivity.activityStu);
module.exports = router;
