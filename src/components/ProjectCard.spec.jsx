import ProjectCard from './ProjectCard';
import { render } from '../test-utils';

describe('ProjectCard', () => {
  const project = { title: 'Tienda', description: 'Desc', tech: ['React', 'JSON'], image: 'i.svg', link: 'https://demo.dev' };
  let ctx;
  beforeEach(async () => { ctx = await render(<ProjectCard project={project} />); });
  afterEach(() => ctx.unmount());

  it('renderiza título, descripción e imagen con alt', () => {
    expect(ctx.container.querySelector('.card-title').textContent).toBe('Tienda');
    expect(ctx.container.querySelector('.card-text').textContent).toBe('Desc');
    expect(ctx.container.querySelector('img').alt).toContain('Tienda');
  });
  it('lista una insignia por tecnología', () => {
    expect(ctx.container.querySelectorAll('.badge-tech').length).toBe(2);
  });
  it('enlaza a la demo o repositorio', () => {
    expect(ctx.container.querySelector('a.btn').href).toContain('demo.dev');
  });
});
