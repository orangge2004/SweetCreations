import express from 'express';

const app = express();

// No revelar que el servidor usa Express (reduce fingerprinting).
app.disable('x-powered-by');

// Límite defensivo para futuros cuerpos JSON.
app.use(express.json({ limit: '10kb' }));

const rawPort = process.env.PORT ?? '3000';
const port = Number(rawPort);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`PORT inválido: ${rawPort}`);
}

// En local escuchamos solo en loopback; en producción se configura HOST=0.0.0.0.
const host = process.env.HOST ?? '127.0.0.1';

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'sweetcreations',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (_req, res) => {
  res
    .status(200)
    .type('html')
    .send(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SweetCreations</title>
  </head>
  <body>
    <h1>SweetCreations</h1>
    <p>¡Próximamente los mejores postres de Caracas!</p>
  </body>
</html>`);
});

// Cualquier ruta no definida responde 404, sin filtrar detalles internos.
app.use((_req, res) => {
  res.status(404).type('text').send('No encontrado');
});

app.listen(port, host, () => {
  console.log(`Servidor en http://${host}:${port}`);
});
