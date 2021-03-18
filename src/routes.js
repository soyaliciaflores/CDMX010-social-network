import { home } from './home.js';
import { login } from './login.js';
import { meVista } from './me.js';
import { register } from './register.js';

export const routes = {
  '/home': home,
  '/register': register,
  '/': login,
  '/me': meVista,
};

export const rootDiv = document.getElementById('root');
// rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (pathname === '/me') {
    const init = routes[pathname];
    init(rootDiv);
  } else {
    rootDiv.innerHTML = routes[pathname];
  }
};

onNavigate(window.location.pathname);