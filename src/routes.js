import { home } from "./home.js";
import { login } from "./login.js";
import { me } from "./me.js";
import { register } from "./register.js";

export const routes = {
  "/": home,
  "/register": register,
  "/login": login,
  "/me": me,
};

export const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.addEventListener("DOMContentLoaded", () => {
  routes;
});
