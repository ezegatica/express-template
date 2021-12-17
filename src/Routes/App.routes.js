const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/App.controller');

router.get('/', Controller.hello);


module.exports = router;