import { useState } from 'react';
import { useJson } from '../hooks/useJson';

/** Sección de logros cargados desde JSON. Si se indica `category`, filtra; si no, muestra todos (más recientes primero). */
export default function NewsSection({ id, title, category, url = './data/news.json' }) {
  const { data, error, loading } = useJson(url);
  const [abierta, setAbierta] = useState(null);
  const items = (data || [])
    .filter((n) => !category || n.category === category)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section id={id} className="section container" aria-label={title}>
      <h2 className="section-title">{title}</h2>
      {loading && <p role="status">Cargando logros…</p>}
      {error && <p role="alert">No se pudieron cargar los logros.</p>}
      <div className="row g-4">
        {items.map((n) => {
          const expandida = abierta === n.id;
          return (
            <div className="col-md-6" key={n.id}>
              <article className="card card-dark h-100 p-3">
                <time className="text-muted-2 small" dateTime={n.date}>{n.date}</time>
                <h3 className="h5 mt-1">{n.title}</h3>
                <p className={expandida ? 'news-text' : 'news-text clamp'}>{n.content}</p>
                <button
                  type="button" className="btn btn-pill btn-sm align-self-start"
                  aria-expanded={expandida}
                  onClick={() => setAbierta(expandida ? null : n.id)}
                >
                  {expandida ? 'Leer menos' : 'Leer más'}
                </button>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
