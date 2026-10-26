# SweetCreations

Catálogo web y panel de administración para **SweetCreations** (Caracas, Venezuela).

Los pedidos, entregas y pagos se coordinan por WhatsApp. La aplicación **no almacena datos de clientes**.

## Estado

Módulo 0: entorno y esqueleto. En construcción.

## Stack

- Node.js 24 LTS + TypeScript
- Express 5 + EJS
- PostgreSQL + Drizzle ORM
- Tailwind CSS
- Vitest + Playwright

## Requisitos

- Node.js `24.22.1` (ver `.node-version`)
- npm 11+
- PostgreSQL (a partir del Módulo 3)

## Desarrollo

```bash
npm install
npm run dev
```

Abrir <http://127.0.0.1:3000/health>.

## Comandos

```bash
npm run dev        # servidor con recarga automática
npm run typecheck  # verificación de tipos
npm run build      # compila a dist/
npm start          # ejecuta la versión compilada
```

## Seguridad

- No se commitean secretos. La configuración local va en `.env`; el ejemplo está en `.env.example`.
- No se almacenan datos personales de clientes.
- Los pedidos se coordinan por WhatsApp.
- Las imágenes se validan y se les elimina el EXIF antes de publicarlas.

## Licencia

Código: pendiente de definir. Contenido, marca e imágenes: todos los derechos reservados.
