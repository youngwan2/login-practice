"use strict";

const username = document.getElementById("username"),
  password = document.getElementById("password"),
  pwReconfirm = document.getElementById("password-re"),
  $name = document.getElementById("name"),
  signinBtn = document.getElementById("signin-btn"),
  signinform = document.querySelector(".signin-form");

const signinHandler = () => {
  if (!username.value) alert("아이디를 입력해주세요.");
  if (password.value !== pwReconfirm.value) {
    alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    username: username.value,
    password: password.value,
    name: $name.value,
  };
  console.log(req);

  // signin 경로로 유저가 입력한 데이터(req)를 보낸다.
  fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) return (location.href = "/");
      else alert(result.msg);
    })
    .catch((error) => console.error(error));
};

signinBtn.addEventListener("click", signinHandler);

signinform.addEventListener("submit", (e) => {
  e.preventDefault();
});
