const express = require('express');
const path = require('path');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/', blogController.blog);

module.exports = router;