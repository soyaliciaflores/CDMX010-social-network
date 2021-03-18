let routes = {};

let firebase = null;

export const loadRoutesAndFirebase = (routeFromMain, firebaseFromMain) => {
  routes = routeFromMain;
  firebase = firebaseFromMain;
};

export const rootDiv = document.getElementById('root');
// rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
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

onNavigate(window.location.pathname);