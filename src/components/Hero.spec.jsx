import Hero from './Hero';
import { render } from '../test-utils';

describe('Hero', () => {
  const props = { name: 'Ana', role: 'Dev', bio: 'Bio de prueba', photo: 'x.svg', github: 'https://github.com/ana' };
  let ctx;
  beforeEach(async () => { ctx = await render(<Hero {...props} />); });
  afterEach(() => ctx.unmount());

  it('muestra nombre y biografía recibidos por props', () => {
    expect(ctx.container.querySelector('h1').textContent).toContain('Ana');
    expect(ctx.container.textContent).toContain('Bio de prueba');
  });
  it('la foto tiene texto alternativo (accesibilidad)', () => {
    expect(ctx.container.querySelector('img').getAttribute('alt')).toBe('Foto de perfil de Ana');
  });
  it('el enlace apunta al GitHub indicado', () => {
    expect(ctx.container.querySelector('a').getAttribute('href')).toBe('https://github.com/ana');
  });
});
