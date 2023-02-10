"use strict"

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

// GET 요청
router.get('/',ctrl.output.home); //홈화면 요청
router.get('/login',ctrl.output.login); //로그인화면 요청
router.get('/signin',ctrl.output.signin); //회원가입화면 요청

// POST 요청
router.post('/login',ctrl.process.login); //로그인 처리 요청
router.post('/signin',ctrl.process.signin); //회원가입 처리 요청



module.exports = router;

