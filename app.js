/* Created by Tivotal */

const wrapper = document.querySelector(".wrapper");

const loginHeader = document.querySelector(".login header");

const signupHeader = document.querySelector(".signup header");

signupHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
