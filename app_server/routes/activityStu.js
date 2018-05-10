const express = require('express');
const router = express.Router();
const ctrlActivity = require('../controllers/activityStu');

router.get('/', ctrlActivity.activityStu);
module.exports = router;
