import ProjectCard from './ProjectCard';
import { useJson } from '../hooks/useJson';

export default function Projects({ url = './data/projects.json' }) {
  const { data, error, loading } = useJson(url);
  return (
    <section id="proyectos" className="section container">
      <h2 className="section-title">Proyectos</h2>
      {loading && <p role="status">Cargando proyectos…</p>}
      {error && <p role="alert">No se pudieron cargar los proyectos. Recarga la página.</p>}
      <div className="row g-4">
        {data && data.map((p) => (
          <div className="col-12 col-md-6 col-lg-4" key={p.id}><ProjectCard project={p} /></div>
        ))}
      </div>
    </section>
  );
}
