const path = require('path');

exports.rickroll = (request, response, next) => {
    response.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

exports.comida = (request, response, next) => {
    response.render('Lab7Ventas');
}
  