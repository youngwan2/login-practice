"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  username: ["andufr12", "qodna25"],
  password: ["dktltl11"],
};

const process = {
  login: (req, res) => {
    const id = req.body.username;
    const pw = req.body.password;

    if (users.username.includes(id)) {
      const idx = users.username.indexOf(id);
      if (users.password.includes(pw)) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = { output, process };
