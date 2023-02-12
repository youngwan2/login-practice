"use strict";

const UserStorage = require("../.././models/UserStorage");
const User = require("../../models/User");
console.log(UserStorage.users);

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  signin:( req,res) => {
    res.render("home/signin");
  }
};

const process = {
   login: async (req, res) => {
    // 유저가 로그인 시 전송한 정보를 User 클래스로 전달한다.
    const user = new User(req.body);

    //유저 클래스에서 정의된 메서드가 실행되면서 로그인 인증 결과를  반환한다.
    return res.json(await user.login());
  },
  signin:(req,res) => {
    //유저로 부터 전송된 정보를 User 클래스로 전달한다. 
    const user = new User(req.body);

    //유저 클래스에서 정의된 signin 메서드를 호출하여 반환된 결과를 json 형태로 변환해서 반환
    return res.json(user.signin());
  }
};

module.exports = { output, process };
