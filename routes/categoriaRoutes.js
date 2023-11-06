const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/categoria', categoriaController.listarCategorias);

router.get('/:categoriaId', categoriaController.obtenerCategoriaPorId);

router.post('/categoria', categoriaController.crearCategoria);

router.put('/:categoriaId', categoriaController.actualizarCategoria);

router.delete('/:categoriaId', categoriaController.borrarCategoria);

module.exports = router;
