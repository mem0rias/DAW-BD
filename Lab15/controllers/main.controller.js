const path = require('path');

exports.inicio = (request, response, next) => {
    response.render('index');
}

exports.selector = (request, response, next) => {
    let red = request.body.boton;
    response.redirect(red);
}

exports.preguntas = (request, response, next) => {
    response.render('preguntas');
}

exports.error = (request, response, next) => {
    response.status(404);
    response.render('error');
}
  