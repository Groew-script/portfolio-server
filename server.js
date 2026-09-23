// server.js – Servidor Express simples
// Este código cria um servidor que serve a pasta "public" como arquivos estáticos
// e adiciona rotas específicas para a página principal, health‑check e 404.

const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal – devolve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check – usado pelo Render para saber se o servidor está vivo
app.get('/health', (req, res) => {
  res.send('ok');
});

// Página 404 para rotas inexistentes
// Rota para a página de currículo
app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cv.html'));
});

// Página 404 para rotas inexistentes
app.use((req, res) => {
  res.status(404).send('<h1>404 – Página não encontrada</h1>');
});

// Porta: usa a variável de ambiente (necessária no Render) ou 3000 para desenvolvimento
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado → http://localhost:${PORT}`);
});
