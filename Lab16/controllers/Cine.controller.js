const path = require('path');

const cine = require('../model/cine.model');
const pelis = new cine();


exports.action = (request, response, next) => {
  response.render(path.join('cine'));
  
};

exports.addMovie = (request, response, next) => {
    if(request.body.boton != undefined){
        response.redirect(request.body.boton);
        return 
    }
    pelis.add(request.body.nombre);
    response.setHeader('Set-Cookie', 'LastMovie=' + request.body.nombre);
    response.redirect('/memo/favs');
    console.log(request.cookies);
}

exports.displayMovs = (request, response, next) => {
    let res = pelis.fetchAll();
    let movieFav = request.cookies.favoriteMov;
    console.log(request.cookies.favoriteMov);
    response.render('favs.ejs', {result: res, movieFav: movieFav});
}

exports.button = (request, response, next) => {
    let val = request.body.boton;
    if(val == 'reset'){
        pelis.clear();
        response.setHeader('Set-Cookie', 'favoriteMov=' + undefined);
        response.redirect('/memo/favs');
        return
    }
    else if(val == "elminfav")
        response.setHeader('Set-Cookie', 'favoriteMov=' + undefined);
    else if(request.body.pelifav != undefined){
       response.setHeader('Set-Cookie', 'favoriteMov=' + request.body.pelifav);
       
       console.log(request.body.pelifav);
    }else{
      response.redirect('/memo/cine');
      return
    }
    response.redirect('/memo/favs');
    //next();
}