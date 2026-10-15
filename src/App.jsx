import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';


const perfil = {
  name: 'Camila Corocedo Lorca',
  role: 'Estudiante de Ingeniería en Informática · Duoc UC',
  bio: 'Estoy en mi primer semestre y ya he trabajado con Python, Java, Kotlin, HTML y CSS, además de AWS Academy y ciberseguridad con Kali Linux. Me gusta aprender construyendo cosas que funcionen y que se vean bien.',
  photo: './img/profile.jpg',
  github: 'https://github.com/COROCEDOK',
};
const metricas = [['3', 'Proyectos'], ['4', 'Noticias'], ['6', 'Tecnologías']];

export default function App() {
  const [menu, setMenu] = useState(false);
  const links = [['introduccion', 'Introducción'], ['proyectos', 'Proyectos'], ['noticias', 'Noticias'], ['contacto', 'Contacto']];
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
        <div id="noticias">
          <NewsSection title="Noticias de tecnología" category="tech" />
          <NewsSection title="Noticias de mi carrera" category="carrera" />
        </div>
        <ContactForm />
      </main>
      <footer className="footer"><div className="container"><p className="footer-brand">{perfil.name}</p></div></footer>
    </>
  );
}
