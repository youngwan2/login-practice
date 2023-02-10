"use strict";

const UserStorage = require("../models/UserStorage");

class User {
  //유저의 req 데이터가 body 에 담겨있다.
  constructor(body) {
    this.body = body;
  }

  login() {
    // 유저가 로그인 시 입력한 아이디와 비밀번호
    const { username: id, password: pw } = this.body;

    //데이터베이스에 저장된 유저의 아이디와 비밀번호
    const { username, password } = UserStorage.getUserInfo(id);
    console.log(username === id, password == pw);

    if (username) {
      if (username === id && password === pw) {
        return { success: true };
      }
      return { msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  signin() {
    UserStorage.save(this.body);
  }
}

module.exports = User;
