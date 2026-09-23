# Portfolio Server

Este repositório contém um pequeno servidor **Node.js + Express** que serve o seu portfólio estático.

## 📦 Instalação e execução local
```bash
# Clone o repositório (ou copie esta pasta)
git clone <URL_DO_REPO>
cd portfolio-server

# Instalar dependências
npm install

# Executar em modo desenvolvimento (recarrega ao mudar o código)
npm run dev

# Ou iniciar normalmente
npm start
```
O site ficará disponível em **http://localhost:3000**.

## 📤 Enviar para o GitHub
```bash
# Inicializa o repositório local
git init
git add .
git commit -m "Primeiro commit – servidor de portfólio"

# Cria um repositório remoto no GitHub (GitHub → New repository)
# Depois, liga o remoto e envia o código
git remote add origin https://github.com/SEU_USUARIO/portfolio-server.git
git branch -M main
git push -u origin main
```
- `git init` cria um repositório vazio.
- `git add .` adiciona todos os arquivos.
- `git commit -m "…"` cria o snapshot.
- `git remote add origin …` aponta para o repositório online.
- `git push` envia o commit.

## 🚀 Publicar no Render (serviço gratuito)
1. Crie uma conta em https://render.com (gratuita).
2. No dashboard, clique **New > Web Service**.
3. Escolha **Connect a Git Repository** e selecione o repo que acabou de criar.
4. Mantenha as opções padrão (Node, plano *Free*).
5. No campo **Build Command** deixe `npm install`.
6. No campo **Start Command** deixe `npm start`.
7. O Render usará o arquivo `render.yaml` e a rota `/health` para o health‑check.
8. Aguarde o deploy terminar – o serviço mostrará um link fixo (ex.: `https://portfolio-server.onrender.com`).

## 🔄 Atualizar o portfólio
1. Alterar o arquivo `public/index.html` (ou outros assets) localmente.
2. Testar com `npm run dev`.
3. Quando tudo estiver ok, faça:
```bash
git add .
git commit -m "Atualizando portfólio"
git push
```
O Render detecta o novo commit e redeploya automaticamente.

## ⚠️ Aviso sobre o plano gratuito do Render
- O serviço entra em *sleep* após alguns minutos sem tráfego.
- A primeira visita depois do *sleep* pode levar **30‑60 s**.
- **Solução simples:** use um monitor gratuito (ex.: UptimeRobot) que faça um `GET https://SEU_LINK.onrender.com/health` a cada 5 min. Isso mantém o serviço acordado.

## 📱 Testar o link no telemóvel
- Abra o navegador do seu telemóvel (dados móveis ou Wi‑Fi).
- Digite o link fornecido pelo Render (ex.: `https://portfolio-server.onrender.com`).
- Verifique se todas as seções e imagens carregam corretamente.

---
### FAQ rápida
- **Preciso de Node instalado?** Sim – versão 20 ou superior (conforme `engines`).
- **Posso usar outro serviço além do Render?** Sim, mas o `render.yaml` é específico ao Render.
- **Preciso de banco de dados?** Não, o site é estático.
