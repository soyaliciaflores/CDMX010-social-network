let routes = {};

let firebaseClient = null;

export const loadRoutesAndFirebase = (routeFromMain, firebaseFromMain) => {
  routes = routeFromMain;
  firebaseClient = firebaseFromMain;
};

export const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  const component = routes[pathname];
  component(rootDiv, firebaseClient);
};

