"use strict";

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginform = document.querySelector(".login-form");

const loginHandler = () => {
  const req = {
    username: username.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((response) => {
      return response.json();
    })
    //.then((result) => console.log(result));
    .then(result => {
      if(result.success) return location.href ='/'
      else alert(result.msg)
    })
    .catch(error => console.error(error))
};

loginBtn.addEventListener("click", loginHandler);

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
});
