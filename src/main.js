// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import {ruotes, rootDiv, onNavigate } from "./routes.js"


window.onpopstate = () => {
    rootDiv.innerHTML = ruotes[window.location.pathname]
}

window.onNavigate = onNavigate;