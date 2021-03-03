// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

import { login } from '../src/login.js';

describe('Uso de DOM', () => {
  const renderizado = login();
  it('Aseguraros que existe un BOTON LOGIN en el DOM', () => {
    expect(renderizado.outerHTML).toBe(`<button id='button-login' class='input-login send'>Iniciar sesión</button>`);
  });

  // it('Ya es vierness', () => {
  //   const boton = renderizado.querySelector('.botoncito');
  //   boton.click();
  //   expect(renderizado.outerHTML).toBe(`<div><button class='botoncito'>haz click</button><p>Ya llegue</p></div>`);
  // });
});
