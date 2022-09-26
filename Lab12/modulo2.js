const express = require('express');
const router = express.Router();



router.get('/rutasecreta', (request, response, next) => {
    console.log('Esto viene de otro archivo');
    let html = '<h1> Esta si es la ruta secreta </h1>';
    response.send(html);
});

router.get('/', (request, response, next) =>{
    let html = '<h1> Pensaste que si habria un secreto? </h1>';
    response.send(html);
});

module.exports = router;