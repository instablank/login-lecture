"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => { 
    res.render("home/login")
};

// 모듈을 밖으로 내보니기
module.exports = {
    home,
    login,
};