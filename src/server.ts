import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import expressLayouts from 'express-ejs-layouts';

const app = express();

// Necesario para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Seguridad básica
app.disable('x-powered-by');

// Middlewares
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '../public')));

// Configuración de EJS + layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

const rawPort = process.env.PORT ?? '3000';
const port = Number(rawPort);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`PORT inválido: ${rawPort}`);
}

const host = process.env.HOST ?? '127.0.0.1';

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'sweetcreations',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (_req, res) => {
  res.status(200).render('home', { title: 'Inicio - SweetCreations' });
});

app.get('/about', (_req, res) => {
  res.status(200).render('about', { title: 'Sobre SweetCreations' });
});

// 404
app.use((_req, res) => {
  res.status(404).type('text').send('No encontrado');
});

app.listen(port, host, () => {
  console.log(`Servidor en http://${host}:${port}`);
});