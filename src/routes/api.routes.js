const express = require('express');
const router = express.Router();
// const userRoutes = require('./routes/user.routes.js');
const xarxa = require('../controllers/api.controller.js');

router.get('/xarxaUrl', xarxa.getPopulation);
router.get('/xarxaEmpresas', xarxa.getempresas);
router.get('/xarxaAll', xarxa.Allinfo);

module.exports = router;