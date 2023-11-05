const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {type:String, require : true},
  descripcion: {type: String, require: true},
  precio: {type: Number, require: true},
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
});

module.exports = mongoose.model('Producto', productoSchema);
