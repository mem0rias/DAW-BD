const path = require('path');
const User = require('../models/user.model');

exports.inicio = (request, response, next) => {
    response.render('inicio');
}

exports.submit = (request, response, next) => {
    let val = request.body;
    const reg = new User(val.nombre, val.A1, val.A2, val.ECiv, val.Email, val.Ocupacion, val.Tel);
    console.log(reg);
    reg.save().then().catch((error) => {
        console.log(error);
    });
    console.log(val.nombre);
    response.redirect('/inicio');
}

exports.error = (request, response, next) => {
    response.status(404);
    response.render('error');
}