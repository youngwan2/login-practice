"use strict";

const UserStorage = require("../.././models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const { username: id, password: pw } = req.body;
    const users = UserStorage.getUsers("username", "password");

    const response = { success: false };
    if (users.username.includes(id)) {
      const idx = users.username.indexOf(id);
      if (users.password.includes(pw)) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패 하였습니다.";
    return res.json(response);
  },
};

module.exports = { output, process };
