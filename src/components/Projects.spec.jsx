import Projects from './Projects';
import { render, flush, mockFetch } from '../test-utils';

describe('Projects', () => {
  it('muestra una tarjeta por cada proyecto del JSON', async () => {
    mockFetch([1, 2, 3].map((i) => ({ id: i, title: `P${i}`, description: 'd', tech: ['A'], image: 'i.svg', link: '#' })));
    const ctx = await render(<Projects />);
    await flush();
    expect(ctx.container.querySelectorAll('article.card').length).toBe(3);
    ctx.unmount();
  });
});
