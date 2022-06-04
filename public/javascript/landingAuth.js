// const { default: axios } = require("axios");
let landingCount = 0;

document.querySelector("#createAccForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  createUser(e.target[0].value, e.target[1].value, e.target[2].value);
});

const createUser = async (username, email, password) => {

  await axios.post("api/user/create", { username, email, password });
  return (location.href = "/");
};
/*






*/
document.querySelector("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  loginUser(e.target[0].value, e.target[1].value);
});

const loginUser = async (email, password) => {
  await axios.post("api/user/login", { email, password });
  return (location.href = "/");
};
/*






*/
