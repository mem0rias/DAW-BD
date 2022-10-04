const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const filesystem = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


const mainControl = require('./controllers/main.controller');
const rutass = require('./routes/routes.js');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/memo', rutass);

app.post('/inicio', mainControl.selector);
app.use('/inicio', mainControl.inicio);

app.use('/preguntas', mainControl.preguntas);

app.use(mainControl.error);

app.listen(3000);