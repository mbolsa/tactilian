const express = require('express');
const router = express.Router();
const ctrlLinkedTeachers = require('../controllers/linked_teachers');

router.get('/', ctrlLinkedTeachers.linkedTeachers);
module.exports = router;
