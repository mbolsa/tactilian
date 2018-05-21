const express = require('express');
const router = express.Router();
const ctrlCatalogo = require('../controllers/catalog');

router.get('/', ctrlCatalogo.catalogo);
module.exports = router;
