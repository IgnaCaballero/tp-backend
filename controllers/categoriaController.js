const Categoria = require('../models/categoria');

const listarCategorias = async (req, res) => {
  try {
    const categoria = await Categoria.find();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar las categorías' });
  }
};

const obtenerCategoriaPorId = async (req, res) => {
  const { categoriaId } = req.params;
  try {
    const categoria = await Categoria.findById(categoriaId);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

const crearCategoria = async (req, res) => {
  const nombre = req.body;
  const nuevaCategoria = new Categoria(nombre);
  try {
    const categoriaCreada = await nuevaCategoria.save();
    res.json(categoriaCreada);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

const actualizarCategoria = async (req, res) => {
  const { categoriaId } = req.params;
  const nombre = req.body;
  try {
    const categoriaActualizada = await Categoria.findByIdAndUpdate(categoriaId,
      nombre, { new: true });

    res.json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

const borrarCategoria = async (req, res) => {
  const { categoriaId } = req.params;
  try {
    await Categoria.findByIdAndRemove(categoriaId);
    res.json({ mensaje: 'Categoría eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar la categoría' });
  }
};

module.exports = {
  listarCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  actualizarCategoria,
  borrarCategoria,
};
