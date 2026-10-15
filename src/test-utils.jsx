import { act } from 'react';
import { createRoot } from 'react-dom/client';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

/** Monta un componente en el DOM real del navegador (Karma). */
export async function render(ui) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  await act(async () => { root.render(ui); });
  return { container, unmount: () => { act(() => root.unmount()); container.remove(); } };
}
/** Simula escribir en un input controlado por React. */
export async function type(el, value) {
  const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement : HTMLInputElement;
  const setter = Object.getOwnPropertyDescriptor(proto.prototype, 'value').set;
  await act(async () => { setter.call(el, value); el.dispatchEvent(new Event('input', { bubbles: true })); });
}
export const click = (el) => act(async () => { el.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
export const flush = () => act(async () => {});
/** Mock de fetch que devuelve JSON (o falla con ok:false). */
export const mockFetch = (data, ok = true) =>
  spyOn(window, 'fetch').and.returnValue(Promise.resolve({ ok, status: ok ? 200 : 500, json: () => Promise.resolve(data) }));
