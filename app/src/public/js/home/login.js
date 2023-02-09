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
};

loginBtn.addEventListener("click", loginHandler);

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
});
