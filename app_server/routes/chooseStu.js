const express = require('express');
const router = express.Router();
const ctrlChooseStu = require('../controllers/chooseStu');

router.get('/', ctrlChooseStu.chooseStu);
module.exports = router;
