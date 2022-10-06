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



app.use(bodyParser.urlencoded({extended: false}));

app.use('/', rutass);

app.listen(3000);