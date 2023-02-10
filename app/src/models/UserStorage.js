"use strict";

class UserStorage {
  static #users = {
    username: ["andufr12", "qodna25"],
    password: ["dktltl11"],
    name: ["동해물",'백두산','하느님']
  };

  static getUsers(...fields) {
    const users = this.#users
    // reduce 내 콜백함수의 첫 번째 매개변수에는 배열의 첫 번째 요소가 초기값으로 들어감
    // 단, reduce의 두 번째 인자에 따로 명시하면 그 해당 요소가 초기값이 됨.
    const newUsers = fields.reduce((newUsers, field)=>{
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field]
        }
        return newUsers;
    },{})

    return newUsers ;
  }
}

module.exports = UserStorage;
