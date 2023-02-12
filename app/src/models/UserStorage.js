"use strict";
//파일을 사용하기 위해서는 fs 을 불러와야 함.
// fs 의 옵션중 promises 를 불러오면 promise 반환하는 기능이 추가
const fs = require("fs").promises;
class UserStorage {
  // 메서드 앞에 #을 붙이면 주요정보 은닉화(private) 가능
  // static 이 메서드 앞에 붙으면 클래스로 직접 접근이 가능
  // 그러나 #이 있어서 곧바로 접근은 못함.
  // 따라서 public 으로 접근이 가능한 메서드를 통해 간접적으로 호출
  static #getUserInfo(users, id) {
    // 매개변수로 받은 username이 users 리스트에서 위치하고 있는 인덱스 반환
    // users.username === "andufr12" => 0 , idx = 0
    const idx = users.username.indexOf(id);
    console.log("일치아디인덱:", idx);

    // Ojbect.keys(객체명) : 객체의 키를 배열형태로 반환
    // ㄴ usersKeys = ['username','password','name']
    const usersKeys = Object.keys(users);
    console.log("유저아디키들:", usersKeys);

    //초기값 영역은 빈객체로 두었기에 호출 때 마다 undefined
    //초깃값 설정하면 배열의 0번째 부터 info에 차례대로 호출
    /**   초기값  username
     *  undefined password
     *  undefined   name
     */
    //즉, 아래 reduce는 빈객체에 새로운 키:값을 추가해서 반환하는 것
    const userInfo = usersKeys.reduce((newUser, info) => {
      /** newUser[username] = users[username][0]
       *  newUser[password] = users[password][0]
       *  newUser[name] = users[name][0]    */
      //     키      :     값
      newUser[info] = users[info][idx];

      /** newUser =[
       *          username : "andufr12",
       *          password :"dktltl11",
       *           name :"백두산"]    * */
      return newUser;
    }, {});
    return userInfo;
  }
  /// ... 매개변수 => 인자를 배열 형태의 매개변수로 바꿈.
  static getUsers(...fields) {
    const users = this.users;

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
    console.log("전달받은아디:", id);
    //users.json에서 가져온 데이터가  result에 담긴다.
    return fs
      .readFile("./src/DB/Users/users.json")
      .then((result) => {
        // 데이터베이스에서 유저 정보를 users 변수에 저장
        const users = JSON.parse(result);

        return this.#getUserInfo(users, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    console.log(userInfo);
  }
}

module.exports = UserStorage;
