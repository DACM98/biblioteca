const server = createServer(app);
const io = new Server(server);
const express = require('express');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routes/UsuariosRouter');
const LibroRouter = require('./routes/LibroRouter');
const PrestamoRouter = require('./routes/PrestamoRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', UsuariosRouter);
app.use('/api', LibroRouter);
app.use('/api', PrestamoRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

