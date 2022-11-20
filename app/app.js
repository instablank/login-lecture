"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

// __dirname/src/public 폴더를 정적경로로 추가
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home); 
//미들웨어를 등록해주는 메서드 routes\home\index.js에서 던진걸 받음
// /<-루트라는 경로로 접속시 home 호출

module.exports = app;