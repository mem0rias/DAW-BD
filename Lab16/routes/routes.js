const cineController = require('../controllers/Cine.controller');
const randoController = require('../controllers/random.controller');
const express = require('express');
const router = express.Router();

const path = require('path');
router.use(express.static(path.join(__dirname, '..','public')));


router.get('/cine', cineController.action);

router.post('/cine', cineController.addMovie);

router.get('/favs', cineController.displayMovs);

router.post('/favs', cineController.button);

router.get('/rickroll', randoController.rickroll);

router.get('/comida', randoController.comida);
module.exports = router;