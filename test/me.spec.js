// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// import { agregapost } from '../src/me.js';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

import { login } from '../src/login.js';
// function sumar(a, b) {
//   return a + b;
// }
// sumar();
describe('Uso de DOM', () => {
  const firebase = { login: () => {}};
  const container = document.createElement('div');
  const renderizado = login(container, firebase);
  // console.log(renderizado);
  it('Aseguraros que existe un BOTON AQUÍ en el DOM', () => {
    // expect(sumar(2, 2)).toBe(4);

    expect(login).toMatchSnapshot();
    // expect(renderizado.outerHTML).toBe(`<p>Registrate <button class='input-login send' id='hereRegister'>AQUI</button></p>`);
  });

  it('Ya es vierness', () => {
    const boton = renderizado.querySelector('#hereRegister');
    boton.click();
    console.log(boton);
    // expect(renderizado.outerHTML).toBe(onNavigate('/register'));
  });
});

// describe('Test me', () => {
//   beforeEach(() => {
//     document.body.innerHTML = '<div id="me-mobile"></div>';
//   });
//   test('Deberia renderizar', async () => {
//     const target = document.getElementById('me-mobile');
//     const post = [
//       { inputPostMob: 'Hola mundo por enésima vez' },
//     ];
//     const getPosts = jest.fn().mockImplementation(() => Promise.resolve(post));
//     const firebase = { getPosts };
//     await agregapost(target, firebase);
//     
//   });
// });
