const express = require('express');
const ruta = express.Router();

// Creacion de End Points en el servidor NodeJS
ruta.get('/', (req, res) => {
    res.status(200).json({status: 200, mensaje:'Se visualizan los libros correctamente'})
});

ruta.get('/:id', (req, res) => {
    res.status(200).json({status: 200, mensaje:'Se visualizan el libro por id'})
});

ruta.post('/', (req, res) => {
    res.status(200).json({status: 200, mensaje:'Se ha creado un nuevo libro correctamente'})
});

ruta.put('/:id', (req, res) => {
    res.status(200).json({status: 200, mensaje:'Se actualizo el libro correctamente'})
});

ruta.delete('/:id', (req, res) => {
    res.status(200).json({status: 200, mensaje:'Se elimino el libro correctamente'})
});

module.exports = ruta;