const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send(`
    <h1>Servidor de Assets da Intranet</h1>
  `);
});

const PORT = process.env.PORT || 3000;
const SERVER_IP = process.env.SERVER_IP || "localhost";

app.listen(PORT, () => {
  console.log(`Rodando na porta http://${SERVER_IP}:${PORT}`);
});