exports.getLibro = (req, res, next) => {
    res.status(200).json({status: 200, mensaje:'Se visualizan los libros correctamente'});
}

exports.getLibroById = (req, res, next) => {
    res.status(200).json({status: 200, mensaje:'Se obtiene el libro por id'});
}

exports.createLibro = (req, res, next) => {
    res.status(200).json({status: 200, mensaje:'Se ha creado un nuevo libro correctamente'});
}

exports.updateLibro = (req, res, next) => {
    res.status(200).json({status: 200, mensaje:'Se actualizo el libro correctamente'});
}

exports.deleteLibro = (req, res, next) => {
    res.status(200).json({status: 200, mensaje:'Se elimino el libro correctamente'});
}