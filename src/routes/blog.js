const express = require('express');
const path = require('path');
const router = express.Router();
const blogController = require('../controllers/blogController');

//rutas del blog
router.get('/', blogController.blog);
router.get('/:id', (req,res) => res.send('Bienvenido al Blog. Recurso ' + req.params.id));
//router.get ("/:id", productController.detail);
//router.get("/create", blogController.create);
//router.get("/:id/edit", blogController.edit);

//router.post("/create", [upload.single("img")] ,blogController.store);
//router.put("/:id/edit", [upload.single("img")],blogController.update);
//router.delete("/:id/delete",blogController.delete)



module.exports = router;