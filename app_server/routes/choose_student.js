const express = require('express');
const router = express.Router();
const ctrlChooseStu = require('../controllers/choose_student');

router.get('/', ctrlChooseStu.chooseStu);
module.exports = router;
