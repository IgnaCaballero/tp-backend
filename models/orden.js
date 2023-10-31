const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
    quantity: {type: Number},
  }],
  total: {type: Number}
});

module.exports = mongoose.model('Orden', ordenSchema);
