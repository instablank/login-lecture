"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
    res.render("home/index");
    },
    login: (req, res) => { 
    res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login(); // User.js내에 로그인 메서드 호출
        return res.json(response); // json 객체로 만들어서 클라이언트(브라우저)에 던짐


        // const id = req.body.id,
        //     psword = req.body.psword;
        
        // const users = UserStorage.getUsers("id","psword");
        
        // const response = {};
        // if(users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] == psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};

// 모듈을 밖으로 내보니기
module.exports = {
    output,
    process,
};