const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const filesystem = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
const cookieParser = require('cookie-parser');


const rutass = require('./routes/main.routes');


app.use(cookieParser());

app.use(session({
    secret: 'aerfgtvythvyugt54cyh4yhyhy6h46yr5ky87br53tgc3g46gg', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', rutass);

app.listen(3000);