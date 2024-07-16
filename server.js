const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();

require('dotenv').config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

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