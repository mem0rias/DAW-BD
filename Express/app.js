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

app.listen(3000);
console.log("Hola");
console.log("HolaX2");