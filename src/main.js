// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();
*/
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
      console.log('el usuario existe');

      if (location.pathname === '/' || location.pathname === '/register') {
        onNavigate('/home')
      } else {
        onNavigate(location.pathname)
      }
      // document.getElementById('me-mobile').style.display = 'none';
      // document.getElementById('home-mobile').style.display = 'none';
      // document.getElementById('div-register').style.display = 'inline-block';
      // document.getElementById('div-login').style.display = 'inline-block';
    } else {
      console.log('usuario es null');
      onNavigate('/')
      // document.getElementById('me-mobile').style.display = 'inline-block';
      // document.getElementById('home-mobile').style.display = 'inline-block';
      // document.getElementById('div-register').style.display = 'none';
      // document.getElementById('div-login').style.display = 'none';
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