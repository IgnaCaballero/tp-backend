const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const productoRoutes = require('./routes/productoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes')
const ordenCompraRoutes = require('./routes/ordenCompraRoutes');

app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.send('Home')
});

app.get('/producto', productoRoutes);
app.get('/categoria', categoriaRoutes);
app.get('/carrito', ordenCompraRoutes);

mongoose
    .connect('mongodb+srv://ignacaballero:ingreso123@cluster0.spmrf7i.mongodb.net/productos?retryWrites=true&w=majority')
    .then( () => {app.listen(3000);})
    .catch(error => {console.log(error)});


