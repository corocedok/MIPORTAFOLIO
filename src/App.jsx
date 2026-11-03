import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';


const perfil = {
  name: 'Camila Corocedo Lorca',
  role: 'Estudiante de Ingeniería en Informática · Duoc UC',
  bio: 'Estudiante de primer año de Ingeniería en Informática en Duoc UC, con experiencia en desarrollo de aplicaciones web y móviles, fundamentos de computación en la nube (AWS Academy) y prácticas de ciberseguridad con Kali Linux. Orientada a construir soluciones funcionales, bien diseñadas y aprendidas en la práctica.',
  photo: './img/profile.jpg',
  github: 'https://github.com/COROCEDOK',
  tech: ['Python', 'Java', 'Kotlin', 'HTML5', 'CSS3', 'AWS', 'Kali Linux'],
};
const metricas = [['3', 'Proyectos'], ['4', 'Logros'], [String(perfil.tech.length), 'Tecnologías']];

export default function App() {
  const [menu, setMenu] = useState(false);
  const links = [['introduccion', 'Perfil'], ['proyectos', 'Proyectos'], ['logros', 'Logros'], ['contacto', 'Contacto']];
  return (
    <>
      <a href="#proyectos" className="visually-hidden-focusable">Saltar al contenido</a>
      <nav className="navbar navbar-expand-lg navbar-dark nav-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#introduccion">Mi Portafolio</a>
          <button className="navbar-toggler" type="button" aria-label="Abrir menú" aria-expanded={menu} onClick={() => setMenu(!menu)}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {links.map(([id, txt]) => (
                <li className="nav-item" key={id}><a className="nav-link" href={`#${id}`} onClick={() => setMenu(false)}>{txt}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Hero {...perfil} />
        <section className="container section"><div className="row g-3">
          {metricas.map(([n, l]) => (
            <div className="col-md-4" key={l}><div className="stat"><strong>{n}</strong><span>{l}</span></div></div>
          ))}
        </div></section>
        <Projects />
        <NewsSection id="logros" title="Logros profesionales" />
        <ContactForm />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p className="mb-1">© {new Date().getFullYear()} {perfil.name}. Todos los derechos reservados.</p>
          <p className="mb-0 footer-muted">Desarrollado por {perfil.name} · React · Bootstrap · Vite</p>
        </div>
      </footer>
    </>
  );
}
