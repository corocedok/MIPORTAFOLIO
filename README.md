# Portafolio Personal (React + Bootstrap + Karma/Jasmine)

Portafolio con secciones Introducción, Proyectos (3 tarjetas), Noticias (2 secciones desde JSON) y Contacto.

## Instalar y ejecutar
```bash
npm install
npm run dev        # desarrollo
npm run build      # genera /dist
npm run deploy     # publica en GitHub Pages (rama gh-pages)
```
## Pruebas y cobertura
```bash
npm test           # Karma + Jasmine en Chrome y Firefox headless
npm run test:chrome
```
El informe de cobertura queda en `coverage/` (abre `coverage/**/index.html`).

## Estructura
- `src/components`: Hero, ProjectCard, Projects, NewsSection, ContactForm (+ `.spec.jsx`)
- `src/hooks/useJson.js`: lectura de JSON → estado de React
- `public/data/*.json`: proyectos y noticias

## Plan de pruebas
| Componente | Caso | Resultado esperado |
|---|---|---|
| Hero | Render con props | Nombre, bio, `alt` y enlace correctos |
| ProjectCard | Render con props | Título, descripción, 1 insignia por tecnología, enlace |
| Projects | JSON con 3 proyectos (mock fetch) | 3 tarjetas |
| NewsSection | JSON con 3 noticias, categoría `tech` | 2 artículos; clic alterna "Leer más/menos"; error si falla fetch |
| ContactForm | Vacío / correo inválido / válido | 3 errores / error de correo / `onSend` + confirmación |

## Capturas
_Agrega aquí capturas de pantalla del portafolio (`docs/captura.png`)._
