const express = require('express');
const router = express.Router();
const ctrlMonitoring = require('../controllers/monitoring');

router.get('/', ctrlMonitoring.monitoring);
module.exports = router;
