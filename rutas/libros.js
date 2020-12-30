const express = require('express');
const ruta = express.Router();

// Creacion de End Points en el servidor NodeJS
const {
    getLibro,
    getLibroById,
    createLibro,
    updateLibro,
    deleteLibro
} = require('../controllers/libroController');

ruta
    .route('/')
    .get(getLibro)
    .post(createLibro);

ruta
    .route('/:id')
    .get(getLibroById)
    .put(updateLibro)
    .delete(deleteLibro)

module.exports = ruta;