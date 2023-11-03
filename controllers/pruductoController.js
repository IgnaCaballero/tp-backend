const Producto = require('../models/producto');

const listarProducto = async (req, res) => {
  try {
    const producto = await Producto.find();
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar los productos.' });
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
};

const obtenerProductoPorCategoria = async (req, res) => {
  try {
    const producto = await Producto.find({ categoria: req.params.categoryId });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos por categoría.' });
  }
};

const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria } = req.body;

  try {
    const crearProducto = new Producto({ nombre, descripcion, precio, categoria });
    await crearProducto.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
};

const actualizarProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria } = req.body;

  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, precio, categoria },
      { new: true }
    );
    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el producto.' });
  }
};

module.exports = {
  listarProducto,
  obtenerProductoPorId,
  obtenerProductoPorCategoria,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
