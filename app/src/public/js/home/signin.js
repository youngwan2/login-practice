"use strict";

const username = document.getElementById("username"),
  password = document.getElementById("password"),
  pwReconfirm = document.getElementById("password-re"),
  $name = document.getElementById("name"),
  signinBtn = document.getElementById("signin-btn"),
  signinform = document.querySelector(".signin-form");

const signinHandler = () => {
  const req = {
    username: username.value,
    password: password.value,
    pwReconfirm: pwReconfirm.value,
    name: $name.value,
  };
  console.log(req);

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
