import { createUser, validarEmail } from './configFirebase.js';
import { onNavigate } from './routes.js';

export const register = `
<div class='div-register'>
  <div class='container-image'>
    <img class='img-logo-login' src='./assets/coffeehousesmall-01.png' alt='Logo Coffee House'><br>
  </div>
  <div class='container-register'>
    <h2 class='titulo'> Registrate </h2>
    <form class='container-register'>
     <input id='email-register' class='input-login line-register' type='email' placeholder='Correo Electrónico'>
     <input id='password-register' class='input-login line-register' type='password' placeholder='Contraseña'>
     <button id='btn-register' class='input-login send'>Registrate</button>
   </form>
   <button id='backToLogin' class='input-login send back'> Regresar </button>
   <p>Al registrarte aceptas términos y condiciones de privacidad</p>
  </div>
</div>
`;

document.addEventListener('click', (e) => {
  if (e.target.matches('#btn-register')) {
    console.log('Estas en Home');
    //validarEmail();
    createUser();
    onNavigate('/home');
  }
  if (e.target.matches('#backToLogin')) {
    console.log('Regresas a Login');
    onNavigate('/');
  }
});
