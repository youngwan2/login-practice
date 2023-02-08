"use strict"

const express = require('express');
const router = express.Router();

const output = require('./home.ctrl')

router.get('/login',output.login);
router.get('/',output.home);


module.exports = router;

