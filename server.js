// Manejo de ambientes de produccion y desarrollo
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const libro = require('./rutas/libros');

// Ubicacion de las variables globales
dotenv.config({path: './config/config.env'});

const app = express();

// Middleware reemplazado con Morgan
// const logger = (req, res, next) => {
//     console.log("Esta request esta pasando por el middleware");
//     next();
// }
// app.use(logger);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); // PUT /api/Libro/123 200 2.124 ms - 62
}

app.use('/api/Libro', libro);


// PORT esta defenido en el archivo config.env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('App listening on port', PORT, 
    'and running in', process.env.NODE_ENV, 'environment!');
});