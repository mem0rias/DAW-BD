const mainControl  = require('../controllers/main.controller');
const express = require('express');
const router = express.Router();

const path = require('path');
router.use(express.static(path.join(__dirname, '..','public')));

router.post('/inicio', mainControl.submit);
router.use('/inicio', mainControl.inicio);
router.post('/seleccion', mainControl.nav);
router.post('/editar', mainControl.selectedit);
router.use('/editar', mainControl.edit);


router.use('/', mainControl.inicio);
router.use(mainControl.error);

module.exports = router;