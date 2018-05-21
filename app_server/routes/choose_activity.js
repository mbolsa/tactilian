const express = require('express');
const router = express.Router();
const ctrlChooseAct = require('../controllers/choose_activity');

router.get('/', ctrlChooseAct.chooseAct);
module.exports = router;
