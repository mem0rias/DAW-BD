const path = require('path');

const cine = require('../model/cine.model');
const pelis = new cine();

exports.action = (request, response, next) => {
  response.render(path.join('cine'));  
};

exports.addMovie = (request, response, next) => {
    pelis.add(request.body.nombre);
    response.redirect('/memo/favs');
}

exports.displayMovs = (request, response, next) => {
    let res = pelis.fetchAll();
    response.render('favs.ejs', {result: res});
}

exports.button = (request, response, next) => {
    let val = request.body.boton;
    console.log(val);
    if(val == 'reset'){
        pelis.clear();
        response.redirect('/memo/favs');
    }
    else{
        response.redirect('/memo/cine');
    }
}