export default function Hero({ name, role, bio, photo, github }) {
  return (
    <header id="introduccion" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-7">
            <p className="text-muted-2 mb-2">{role}</p>
            <h1 className="hero-title">{name}</h1>
            <p className="lead mt-4">{bio}</p>
            <a className="btn btn-pill mt-3" href={github} target="_blank" rel="noreferrer">
              Ver mi GitHub
            </a>
          </div>
          <div className="col-md-5 text-center">
            <img src={photo} alt={`Foto de perfil de ${name}`} className="avatar" width="360" height="450" />
          </div>
        </div>
      </div>
    </header>
  );
}