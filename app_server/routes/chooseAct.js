const express = require('express');
const router = express.Router();
const ctrlChooseAct = require('../controllers/chooseAct');

router.get('/', ctrlChooseAct.chooseAct);
module.exports = router;
