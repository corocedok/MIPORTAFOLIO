import { useState } from 'react';

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactForm({ onSend = () => {} }) {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.nombre.trim()) err.nombre = 'Escribe tu nombre.';
    if (!emailOk(form.email)) err.email = 'Escribe un correo válido.';
    if (!form.mensaje.trim()) err.mensaje = 'Escribe un mensaje.';
    setErrors(err);
    if (Object.keys(err).length === 0) { onSend(form); setSent(true); }
  };

  return (
    <section id="contacto" className="section container">
      <div className="row g-5">
        <div className="col-lg-5">
          <h2 className="section-title">Déjame un mensaje y te respondo pronto.</h2>
        </div>
        <div className="col-lg-7">
          <form onSubmit={submit} noValidate>
            {['nombre', 'email', 'mensaje'].map((campo) => (
              <div className="mb-3" key={campo}>
                <label htmlFor={campo} className="form-label text-capitalize">{campo}</label>
                {campo === 'mensaje'
                  ? <textarea id={campo} name={campo} rows="3" className="form-control input-dark" value={form[campo]} onChange={change} />
                  : <input id={campo} name={campo} className="form-control input-dark" value={form[campo]} onChange={change} />}
                {errors[campo] && <div className="text-danger small" role="alert">{errors[campo]}</div>}
              </div>
            ))}
            <button type="submit" className="btn btn-pill">Enviar mensaje</button>
            {sent && <div className="alert alert-success mt-3" role="status">Mensaje enviado. ¡Gracias!</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
