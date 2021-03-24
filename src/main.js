// Este es el punto de entrada de tu aplicacion

import { rootDiv, loadRoutesAndFirebase, onNavigate } from './routes.js';
import * as firebaseClient from './configFirebase.js';
import { login } from './login.js';
import { home } from './home.js';
import { register } from './register.js';
import { meVista } from './me.js';

const routes = {
  '/': login,
  '/home': home,
  '/register': register,
  '/me': meVista,
};

loadRoutesAndFirebase(routes, firebaseClient);

document.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (location.pathname === '/' || location.pathname === '/register') {
        onNavigate('/home')
      } else {
        onNavigate(location.pathname)
      }
    } else {
      onNavigate('/');
    }
  });
});

window.onpopstate = () => {
  const pathname = window.location.pathname;
  if (pathname === '/me') {
    const init = routes[pathname];
    init(rootDiv);
  } else if (pathname === '/') {
    const init = routes[pathname];
    init(rootDiv, firebaseClient);
  } else {
    rootDiv.innerHTML = routes[pathname];
  }
};
