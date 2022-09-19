const express = require('express');
const app = express();

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

app.listen(3000);
console.log("Hola");
console.log("HolaX2");