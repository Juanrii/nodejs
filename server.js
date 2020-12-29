// Manejo de ambientes de produccion y desarrollo
const dotenv = require('dotenv');
const express = require('express');

const libro = require('./rutas/libros');

// Ubicacion de las variables globales
dotenv.config({path: './config/config.env'});

const app = express();

app.use('/api/Libro', libro);


// PORT esta defenido en el archivo config.env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('App listening on port', PORT, 
    'and running in', process.env.NODE_ENV, 'environment!');
});