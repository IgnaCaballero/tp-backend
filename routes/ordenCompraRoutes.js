const express = require('express');
const router = express.Router();
const ordenCompraController = require('../controllers/ordenCompraController');

router.post('/carrito', ordenCompraController.crearCarrito);

router.post('/:carritoId/agregar', ordenCompraController.agregarProductoAlCarrito);

router.put('/:carritoId/producto/:productoId', ordenCompraController.actualizarProductoEnCarrito);

router.delete('/:carritoId/producto/:productoId', ordenCompraController.borrarProductoDelCarrito);

router.delete('/:carritoId', ordenCompraController.borrarCarrito);

module.exports = router;
