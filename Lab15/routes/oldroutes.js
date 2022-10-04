const express = require('express');
const path = require('path');
const filesystem = require('fs');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
router.use(express.static(path.join(__dirname, '..','public')));
router.get('/comida', (request,response,next) => {
    response.render('Lab7Ventas');
})
router.post('/favs', (request, response, next) => {
    console.log(requ);
    response.redirect(requ);
})
router.get('/favs', (request, response, next) => { //ded
    //console.log(htmlfavs.toString());
    //response.send(htmlfavs.toString());
    favoritos = filesystem.readFileSync('ListaFavs.txt').toString();
    const result = favoritos.split(/\r?\n/);
    response.render('favs.ejs', {result: result});
    //next();
   
});
router.post('/cine', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    filesystem.appendFileSync('listaFavs.txt', '\n' + request.body.nombre);
    response.redirect('/memo/favs');
});

router.get('/cine', (request, response, next) => {
   response.render('cine');
});

router.get('/rickroll', (request, response, next)=>{
    response.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
module.exports = router;