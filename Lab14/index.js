const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const filesystem = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const rutass = require('./routes/routes.js');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/memo', rutass);

app.post('/inicio', (request, response, next) => {
    let red = request.body.boton;
    response.redirect(red);
});
app.use('/inicio', (request, response, next) => {
    response.render('index');
    
});

app.use('/preguntas', (request, response, next) =>{
    response.render('preguntas');
})

app.use((request, response, next) => {
    response.status(404);
    response.render('error');
});

app.listen(3000);