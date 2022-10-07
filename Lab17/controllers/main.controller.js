const path = require('path');
const User = require('../models/user.model');
const { param } = require('../routes/main.routes');
const bulmaToast = require('bulma-toast');
exports.inicio = (request, response, next) => {
    response.render('inicio');
}

exports.submit = (request, response, next) => {
    
    let val = request.body;
    if(val.boton == '/inicio'){
        response.redirect(val.boton);
        return
    }
    const reg = new User(val.nombre, val.A1, val.A2, val.ECiv, val.Email, val.Ocupacion, val.Tel);
    console.log(reg);
    reg.save().then(() =>{
        response.redirect('/success');
        return
    }).catch((error) => {
        console.log(error);
        response.redirect('/fail');
    });
}

exports.nav = (request, response, next) =>{
    let val = request.body.boton;
    console.log(val);
    response.redirect(val);
}

exports.edit = (request, response, next) => {
    
    User.fetchNames().then(([rows, fieldData]) => {
        //console.log(rows);
        response.render('edit.ejs',{nombres: rows, busqueda: 0});
        
    }).catch((error) =>{
        console.log(error);
        response.redirect('/fail');
    });
   
}

exports.selectedit = (request, response, next) => {
    let parameters = request.body.consulta.split("^");
    console.log(parameters);
    if(parameters != undefined){
        User.fetchOne(parameters[0], parameters[1], parameters[2]).then(([rows, fieldData]) => {
            //console.log(rows);
            console.log(rows);
            User.fetchNames().then(([rows2, fieldData2]) => {
                //console.log(rows);
                response.render('edit',{nombres: rows2, busqueda: 1, info: rows[0]});
                return
            }).catch((error) =>{
                console.log(error);
                response.redirect('/fail');
                return
            });
        }).catch((error) =>{
            console.log(error);
            response.redirect('/fail');
            return
        });
    } 
}

exports.updateinfo = (request, response, next) => {
    let val = request.body;
    let parameters = request.body.enviar.split("^");
    let toastvar = 'Error editando usuario'
    console.log(parameters);
    const reg2 = new User(val.nombre, val.A1, val.A2, val.ECiv, val.Email, val.Ocupacion, val.Tel);
    reg2.Update(parameters[0], parameters[1], parameters[2]).then(() =>{
        console.log("Se logro!");
        response.redirect('/success');
    }).catch((error) => {
        console.log(error);
        response.redirect('/fail');
    });
    
    
    
}

exports.fail = (request, response, next) => {
    response.render('fail');
}

exports.success = (request, response, next) => {
    response.render('exito');
}
exports.error = (request, response, next) => {
    response.status(404);
    response.render('error');
}