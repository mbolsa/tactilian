const express = require('express');
const router = express.Router();
const ctrlCatalogo = require('../controllers/catalogo');

router.get('/', ctrlCatalogo.catalogo);
module.exports = router;
