"use strict";

class UserStorage {
  static #users = {
    username: ["andufr12", "qodna25"],
    password: ["dktltl11"],
    name: ["동해물", "백두산", "하느님"],
  };
  /// ... 매개변수 => 인자를 배열 형태의 매개변수로 바꿈.
  static getUsers(...fields) {
    const users = this.#users;
    
    // reduce 내 콜백함수의 첫 번째 매개변수에는 배열의 첫 번째 요소가 초기값으로 들어감
    // 단, reduce의 두 번째 인자에 따로 명시하면 그 해당 요소가 초기값이 됨.
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {
    // 데이터베이스에서 유저 정보를 users 변수에 저장
    const users = this.#users;

    // 매개변수로 받은 username이 users 리스트에서 위치하고 있는 인덱스 반환
    // users.username === "andufr12" => 0 , idx = 0
    const idx = users.username.indexOf(id);

    // Ojbect.keys(객체명) : 객체의 키를 배열형태로 반환
    // ㄴ usersKeys = ['username','password','name']
    const usersKeys = Object.keys(users);

    /**   초기값  username
     *  undefined password
     *  undefined   name
     */
    const userInfo = usersKeys.reduce((newUser, info) => {
      /** newUser[username] = users[username][0]
       *  newUser[password] = users[password][0]
       *  newUser[name] = users[name][0]    */
      newUser[info] = users[info][idx];
      
      /** newUser =[
       *          username : "andufr12",
       *          password :"dktltl11",
       *           name :"백두산"]    * */
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
