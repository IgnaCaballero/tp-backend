const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  items: [{
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: {type: Number},
  }],
  total: {type: Number}
});

module.exports = mongoose.model('Orden', ordenSchema);
