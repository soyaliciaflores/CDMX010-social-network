// importamos la funcion que vamos a testear

import { meVista } from '../src/me.js';

describe('Test meVista', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  test('Deberia renderizar', async () => {
    const container = document.getElementById('root');
    const docMob = [
      { inputPostMob: 'Hola mundo por enésima vez' },
    ];
    const getPost = jest.fn().mockImplementation(() => Promise.resolve(docMob));
    const firebaseClient = { getPost };
    await meVista(container, firebaseClient);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('Comportamiento del botón', async () => {
    const container = document.getElementById('root');
    const docMob = [
      { inputPostMob: 'Hola mundo por enésima vez' },
    ];
    const getPost = jest.fn().mockImplementation(() => Promise.resolve(docMob));
    const firebaseClient = { getPost };
    await meVista(container, firebaseClient);

    const boton = document.getElementById('send-icon-mobile');
    boton.click();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
