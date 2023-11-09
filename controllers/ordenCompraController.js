const OrdenCompra = require('../models/ordenCompra');
const Producto = require('../models/producto');

const crearCarrito = async (req, res) => {
  try {
    const nuevoCarrito = new OrdenCompra({
      productos: [],
      precioTotal: 0,
    });
    const carritoCreado = await nuevoCarrito.save();
    res.json(carritoCreado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el carrito' });
  }
};

const agregarProductoAlCarrito = async (req, res) => {
  const { productoId, carritoId } = req.params;
  const { cantidad } = req.body;
  try {
    const carrito = await OrdenCompra.findById(carritoId);
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }
    const producto = await Producto.findById(productoId);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    const itemCarrito = {
      producto: productoId,
      cantidad: cantidad,
      precioUnitario: producto.precio,
    };

    carrito.productos.push(itemCarrito);
    carrito.precioTotal += itemCarrito.cantidad * itemCarrito.precioUnitario;

    const carritoActualizado = await carrito.save();
    res.json(carritoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

const actualizarProductoEnCarrito = async (req, res) => {
  const { carritoId, productoId } = req.params;
  const { cantidad } = req.body;
  try {
    const carrito = await OrdenCompra.findById(carritoId);
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }
    
    const productoEnCarrito = carrito.productos.find(item => item.producto.toString() === productoId);

    if (!productoEnCarrito) {
      return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }

    productoEnCarrito.cantidad = cantidad;

    carrito.precioTotal = carrito.productos.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);

    const carritoActualizado = await carrito.save();
    res.json(carritoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto en el carrito' });
  }
};

const borrarProductoDelCarrito = async (req, res) => {
  const { carritoId, productoId } = req.params;
  try {
    const carrito = await OrdenCompra.findById(carritoId);
    if (!carrito) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const index = carrito.productos.findIndex(item => item.producto.toString() === productoId);
    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }

    carrito.productos.splice(index, 1);
    carrito.precioTotal = carrito.productos.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
    
    const carritoActualizado = await carrito.save();
    res.json(carritoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar producto del carrito' });
  }
};

const borrarCarrito = async (req, res) => {
  const { carritoId } = req.params;
  try {
    await OrdenCompra.findByIdAndRemove(carritoId);
    res.json({ mensaje: 'Carrito eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el carrito' });
  }
};

module.exports = {
  crearCarrito,
  agregarProductoAlCarrito,
  actualizarProductoEnCarrito,
  borrarProductoDelCarrito,
  borrarCarrito,
};
