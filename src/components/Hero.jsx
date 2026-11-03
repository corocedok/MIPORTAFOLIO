export default function Hero({ name, role, bio, photo, github, tech = [] }) {
  return (
    <header id="introduccion" className="hero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-9">
            <p className="text-muted-2 mb-2">{role}</p>
            <h1 className="hero-title">{name}</h1>
            <p className="lead mt-4">{bio}</p>
            {tech.length > 0 && (
              <div className="mt-4">
                <h2 className="h6 text-muted-2 text-uppercase mb-2">Tecnologías principales</h2>
                <ul className="list-inline mb-0">
                  {tech.map((t) => (
                    <li key={t} className="list-inline-item badge badge-tech">{t}</li>
                  ))}
                </ul>
              </div>
            )}
            <a className="btn btn-pill mt-4" href={github} target="_blank" rel="noreferrer">
              Ver mi GitHub
            </a>
          </div>
          <div className="col-md-3 text-center text-md-end">
            <img src={photo} alt={`Foto de perfil de ${name}`} className="avatar" width="200" height="200" />
          </div>
        </div>
      </div>
    </header>
  );
}
