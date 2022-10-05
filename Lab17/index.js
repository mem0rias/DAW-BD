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


const mainControl = require('./controllers/main.controller');



app.use(bodyParser.urlencoded({extended: false}));
app.post('/inicio', mainControl.submit);
app.use('/inicio', mainControl.inicio);



app.use(mainControl.error);

app.listen(3000);