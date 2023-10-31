const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) =>{
    res.send('Home')
});

app.get('/producto', );
app.get('/categoria', );
app.get('/orden', );

mongoose
    .connect('mongodb+srv://ignacaballero:ingreso123@cluster0.spmrf7i.mongodb.net/productos?retryWrites=true&w=majority')
    .then( () => {app.listen(3000);})
    .catch(error => {console.log(error)});


