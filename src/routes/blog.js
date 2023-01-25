const express = require('express');
const path = require('path');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/', blogController.blog);
router.get('/:id', (req,res) => res.send('Bienvenido al Blog. Recurso ' + req.params.id));

module.exports = router;