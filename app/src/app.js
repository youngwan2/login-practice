"use strict"

const { urlencoded } = require('express');

// 모듈
const express = require('express');
const app = express();

// 라우터
const home = require('./routes/home');

// 앱 셋팅
app.set('views', "./src/views" ); //초기 views의 경로를 ./src/views로 지정
//ㄴㄴ get 등 요청 시에 위 경로 생략하고 이후 경로만 입력하면 됨.

app.set('view engine','ejs')

// 미들웨어 셋팅(등록)
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

 // ㄴ Router 설정
 app.use("/",home);

// expree app 모듈 내보내서 www.js 파일로 전달하
module.exports = app