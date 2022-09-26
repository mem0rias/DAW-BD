const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const misRutas = require('./modulo2.js');
app.use('/secreto', misRutas);
const filesystem = require('fs');

app.use(bodyParser.urlencoded({extended:false}));

let htmlpro = filesystem.readFileSync('TestLab.html');
let htmlfavs = filesystem.readFileSync('Lab12.html');

const robots = [];
//Middleware

app.post('/cine', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    filesystem.appendFileSync('listaFavs.txt', '\n' + request.body.nombre);
    response.redirect('/favs');
});
app.use('/cine', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Pagina para guardar tus peliculas favoritas</h1>";
    html += '<form action="/cine" method="POST">';
    html += '<label for="nombre">Titulo Pelicula: </label>';
    html += '<input type="text" id="nombre" name="nombre">';
    html += "<br><br>";
    html += '<input type="submit" id="enviar" name="enviar" value="Registrar">';
    html += "</form>";
    response.send(html); 
    

});



app.use('/favs', (request, response, next) => { //ded
    //console.log(htmlfavs.toString());
    //response.send(htmlfavs.toString());
    favoritos = filesystem.readFileSync('ListaFavs.txt').toString();
    const result = favoritos.split(/\r?\n/);
    html = ('<h2> Listado: </h2> <ul>');
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
        html += ('<li>' + result[i] + '</li>');
    }
    html +=('</ul>');
    response.send(html);
    console.log(html);
    //next();
   
});

app.use('/inicio', (request, response, next) => {
    let html = ("<h1> Entra a /cine para comprar boletos de cine </h1>");
    html += ("<br>");
    html += ("<h1> usa /favs para ver el listado de peliculas favoritas </h1>");
    html += ("<br>")
    html += ("<h1> Usa /secreto para ver un secreto </h1>")
    response.send(html);
    
});

app.use('/preguntas', (request, response, next) =>{
    let html = filesystem.readFileSync('package_explicacion.html');
    response.send(html.toString());
});

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>'); //Manda la respuesta
});




app.listen(3000);
console.log("Hola");
console.log("HolaX2");