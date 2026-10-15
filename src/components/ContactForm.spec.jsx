import ContactForm from './ContactForm';
import { render, type, click } from '../test-utils';

describe('ContactForm', () => {
  let ctx, onSend;
  const $ = (s) => ctx.container.querySelector(s);
  const enviar = () => click($('button[type="submit"]'));
  beforeEach(async () => { onSend = jasmine.createSpy('onSend'); ctx = await render(<ContactForm onSend={onSend} />); });
  afterEach(() => ctx.unmount());

  it('muestra errores si se envía vacío y no llama a onSend', async () => {
    await enviar();
    expect(ctx.container.querySelectorAll('[role="alert"]').length).toBe(3);
    expect(onSend).not.toHaveBeenCalled();
  });
  it('rechaza un correo inválido', async () => {
    await type($('#nombre'), 'Ana'); await type($('#email'), 'malo'); await type($('#mensaje'), 'Hola');
    await enviar();
    expect($('[role="alert"]').textContent).toContain('correo');
  });
  it('con datos válidos envía y confirma', async () => {
    await type($('#nombre'), 'Ana'); await type($('#email'), 'ana@correo.cl'); await type($('#mensaje'), 'Hola');
    await enviar();
    expect(onSend).toHaveBeenCalledWith({ nombre: 'Ana', email: 'ana@correo.cl', mensaje: 'Hola' });
    expect($('.alert-success')).not.toBeNull();
  });
});
