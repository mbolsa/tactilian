const express = require('express');
const router = express.Router();
const ctrlExecution = require('../controllers/execution');

router.get('/', ctrlExecution.execution);
module.exports = router;
