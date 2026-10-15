/** Tarjeta Bootstrap de un proyecto: imagen, título, descripción, tecnologías y enlace. */
export default function ProjectCard({ project }) {
  const { title, description, tech = [], image, link } = project;
  return (
    <article className="card h-100 card-dark">
      <img src={image} className="card-img-top" alt={`Captura del proyecto ${title}`} />
      <div className="card-body d-flex flex-column">
        <h3 className="h5 card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <ul className="list-inline mb-3">
          {tech.map((t) => (
            <li key={t} className="list-inline-item badge badge-tech">{t}</li>
          ))}
        </ul>
        <a href={link} className="btn btn-pill mt-auto align-self-start" target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      </div>
    </article>
  );
}
