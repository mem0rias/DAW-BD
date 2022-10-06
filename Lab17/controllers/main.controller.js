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

exports.nav = (request, response, next) =>{
    let val = request.body.boton;
    console.log(val);
    response.redirect(val);
}

exports.edit = (request, response, next) => {
    
    User.fetchNames().then(([rows, fieldData]) => {
        //console.log(rows);
        response.render('edit.ejs',{nombres: rows});
        
    }).catch((error) =>{
        console.log(error);
        response.redirect('/inicio');
    });
   
}

exports.selectedit = (request, response, next) => {
    let parameters = request.body.consulta.split(" ");
    console.log(parameters);
    User.fetchOne(parameters[0], parameters[1], parameters[2]).then(([rows, fieldData]) => {
        //console.log(rows);
        console.log(rows);
        response.redirect('/editar');
    }).catch((error) =>{
        console.log(error);
        response.redirect('/inicio');
    });
    
    
    
}
exports.error = (request, response, next) => {
    response.status(404);
    response.render('error');
}