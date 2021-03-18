// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();
*/
import { rootDiv, onNavigate, loadRoutesAndFirebase } from './routes.js';
import * as firebaseClient from './configFirebase.js';
import { home } from './home.js';
import { login } from './login.js';
import { meVista } from './me.js';
import { register } from './register.js';

const routes = {
  '/home': home,
  '/register': register,
  '/': login,
  '/me': meVista,
};

loadRoutesAndFirebase(routes, firebaseClient);

window.onpopstate = () => {
  const pathname = window.location.pathname;
  if (pathname === '/me') {
    const init = routes[pathname];
    init(rootDiv);
  } else if (pathname === 'login') {
    const init = routes[pathname];
    init(rootDiv, firebase);
  } else {
    rootDiv.innerHTML = routes[pathname];
  }
};

window.onNavigate = onNavigate;
