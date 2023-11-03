const express = require('express');
const router = express.Router();
const productoController = require('../controllers/pruductoController');


router.get('/producto', productoController.listarProducto);

router.get('/producto/:id', productoController.obtenerProductoPorId);

router.get('/producto/categoria/:categoriaId', productoController.obtenerProductoPorCategoria);

router.post('/producto', productoController.crearProducto);

router.put('/producto/:id', productoController.actualizarProducto);

router.delete('/producto/:id', productoController.eliminarProducto);

module.exports = router;
