const mainControl  = require('../controllers/main.controller');
const express = require('express');
const router = express.Router();
const isAuth= require('../util/is-auth.js');
const path = require('path');
router.use(express.static(path.join(__dirname, '..','public')));

router.post('/login', mainControl.loginverf);
router.use('/login', mainControl.login);
router.post('/inicio', mainControl.submit);
router.use('/inicio', isAuth, mainControl.inicio);
router.post('/seleccion', mainControl.nav);

router.post('/load', mainControl.updateinfo);
router.post('/editar', mainControl.selectedit);
router.use('/editar', isAuth, mainControl.edit);
router.use('/success', mainControl.success);
router.use('/fail', mainControl.fail);
router.post('/logout', isAuth, mainControl.logout);



router.use('/', mainControl.inicio);
router.use(mainControl.error);

module.exports = router;