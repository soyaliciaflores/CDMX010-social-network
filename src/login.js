// import { logIn, authGoogle, authFacebook, validarEmail} from './configFirebase.js';
import { onNavigate } from './routes.js';

export const login = (container, firebaseClient) => {
  const html = `
  <div class='div-login'>
    <div class='container-image'>
      <img class='img-logo-login' src='./assets/coffeehousesmall-01.png' alt='Logo Coffee House'>
    </div>
    <div class='container-login'>
      <h2> Inicia sesión </h2><br>
      <form class='form-login'>
        <input id='email-login' class='input-login line' type='email' placeholder='Correo Electrónico' required>
        <input id='password-login' class='input-login line' type='password' placeholder='Contraseña' required>
        <button id='button-login' class='input-login send'>Iniciar sesión</button>
      </form>
      <div class='text-login'>
        <p>¿No tienes una cuenta?</p>
        <p>Registrate <button class='input-login send' id='hereRegister'>AQUI</button></p>
        <p><img class='leaves' src='./assets/LeafLF.png' alt='LeafLF'>
          ó
        <img class='leaves' src='./assets/LeafRG.png' alt='LeafRG'></p>
        <p>Inicia Sesión con</p>
      </div>
      <div class='container-social'>
        <img id='icon-facebook' class='socialnetwork-logo' src='./assets/IconoFB.png'>    
        <img id='icon-google' class='socialnetwork-logo' src='./assets/IconG+.png'>
      </div>
    </div>
  </div>
  `;

  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;

  document.addEventListener('click', (e) => {
    if (e.target.matches('#button-login')) {
      firebaseClient.validarEmail();
      firebaseClient.logIn();
      e.preventDefault();
    }

    if (e.target.matches('#icon-google')) {
      firebaseClient.authGoogle();
    }

    if (e.target.matches('#icon-facebook')) {
      firebaseClient.authFacebook();
    }

    if (e.target.matches('#hereRegister')) {
      onNavigate('/register');
    }
  });
};
