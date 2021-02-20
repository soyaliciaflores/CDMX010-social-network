// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();
*/
import {routes, rootDiv, onNavigate} from "./routes.js"


window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}

window.onNavigate = onNavigate

const home = document.getElementById("home");
const me = document.getElementById("me");
const login = document.getElementById("login");
const register = document.getElementById("register");


home.addEventListener("click", () => {
    onNavigate('/');
    return false;
});

me.addEventListener("click", () => {
    onNavigate('/me');
    return false;
});

login.addEventListener("click", () => {
        onNavigate('/login');
        return false;    
});

register.addEventListener("click", () => {
    onNavigate('/register');
    return false;
}); 