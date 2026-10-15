import NewsSection from './NewsSection';
import { render, click, flush, mockFetch } from '../test-utils';

const noticias = [
  { id: 1, category: 'tech', title: 'T1', date: '2026-01-01', content: 'C1' },
  { id: 2, category: 'tech', title: 'T2', date: '2026-01-02', content: 'C2' },
  { id: 3, category: 'carrera', title: 'T3', date: '2026-01-03', content: 'C3' },
];

describe('NewsSection', () => {
  it('carga el JSON (mock de fetch) y filtra por categoría', async () => {
    const f = mockFetch(noticias);
    const ctx = await render(<NewsSection title="Tech" category="tech" url="/n.json" />);
    await flush();
    expect(f).toHaveBeenCalledWith('/n.json');
    expect(ctx.container.querySelectorAll('article').length).toBe(2);
    expect(ctx.container.textContent).not.toContain('T3');
    ctx.unmount();
  });
  it('alterna "Leer más" / "Leer menos" al hacer clic (estado + DOM)', async () => {
    mockFetch(noticias);
    const ctx = await render(<NewsSection title="Tech" category="tech" />);
    await flush();
    const btn = ctx.container.querySelector('button');
    expect(btn.textContent).toBe('Leer más');
    expect(ctx.container.querySelector('.news-text').classList.contains('clamp')).toBeTrue();
    await click(btn);
    expect(btn.textContent).toBe('Leer menos');
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(ctx.container.querySelector('.news-text').classList.contains('clamp')).toBeFalse();
    ctx.unmount();
  });
  it('muestra un mensaje de error si la carga falla', async () => {
    mockFetch(null, false);
    const ctx = await render(<NewsSection title="Tech" category="tech" />);
    await flush();
    expect(ctx.container.querySelector('[role="alert"]')).not.toBeNull();
    ctx.unmount();
  });
});
