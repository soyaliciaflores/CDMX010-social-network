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
const hereRegister = document.getElementById("hereRegister");
const backToLogin= document.getElementById("backToLogin");
const buttonRegister= document.getElementById("btn-register");

window.addEventListener("DOMContentLoaded", () => {
    const buttonLogin = document.getElementById("button-login");
    buttonLogin.addEventListener("click", () => onNavigate('/home'));
})

hereRegister.addEventListener("click", () => onNavigate('/register'));


backToLogin.addEventListener("click", () => onNavigate('/'));


buttonRegister.addEventListener("click", () => onNavigate('/home'));

home.addEventListener("click", () => {
    onNavigate('/home');
    return false;
});

me.addEventListener("click", () => {
    onNavigate('/me');
    return false;
});

login.addEventListener("click", () => {
        onNavigate('/');
        return false;    
});

register.addEventListener("click", () => {
    onNavigate('/register');
    return false;
}); 