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

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});

app.get('/upload', (req, res) => {
  res.send(`
    <h1>Upload de Arquivo</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Enviar</button>
    </form>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta http://localhost:${PORT}`);
});