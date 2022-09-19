const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

const robots = [];
//Middleware

app.use((request, response, next) => {
    console.log('Middleware!!');
    next();
});

app.use((request, response, next) => {
    console.log('OtroMiddleware!!');
    next();
});


app.use((request, response, next) => {
    console.log('Adios mundo xd');
    console.log('ya mucho middleware apa');
    next();
});

//Se empieza declarando las rutas especificas.
app.use('/roots/root', (request, response, next) => {
    response.send('este si es el root');
    next();
});
app.use('/roots', (request, response, next) => {
    response.send('Casi root pa, pero esto no es linux');
    next();
});

app.get('/robots/new', (request, response, next) => {
  
});

app.post('/robots/new', (request, response, next) => {
    console.log(request.body);
    robots.push(request.body.nombre);
    response.redirect('/robots');
});

app.use('/robots/new', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Registrar robot</h1>";
    html += '<form action="/robots/new" method="POST">';
    html += '<label for="nombre">Nombre del robot: </label>';
    html += '<input type="text" id="nombre" name="nombre">';
    html += "<br><br>";
    html += '<input type="submit" id="enviar" name="enviar" value="Registrar">';
    html += "</form>";
    response.send(html); 
});

app.use('/robots', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Estos son los mejores robots</h1>";
    html += "<ul>";
    for (let r of robots) {
        html += "<li>" + r +"</li>";
    }
    html += "</ul>";
    response.send(html); 
});

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>'); //Manda la respuesta
});

app.listen(3000);
console.log("Hola");
console.log("HolaX2");