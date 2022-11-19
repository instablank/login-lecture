"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// 라우팅관련
router.get("/",ctrl.home);
router.get("/login",ctrl.login);

// router를 외부 app.js 에서 사용할 수 있도록 외부로 내보내기 
module.exports = router;