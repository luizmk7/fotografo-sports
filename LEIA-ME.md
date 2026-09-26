# Lume Sport — Vercel + Google AI Studio

Projeto completo e editável em HTML, CSS e JavaScript, servido e compilado pelo Vite. O design atual foi preservado; imagens WebP estão incluídas. Não precisa de chave Gemini nem de banco de dados.

## 1. Colocar no GitHub
Extraia o ZIP. Envie o CONTEÚDO extraído para um novo repositório: package.json, index.html, vite.config.js e vercel.json precisam aparecer na raiz, ao lado de src e public. Não envie apenas o ZIP, nem apenas dist. Não altere o repositório fotografo usado como referência.

## 2. Vercel
Importe esse novo repositório. Use:
- Framework Preset: Vite
- Root Directory: ./ (pasta que contém package.json)
- Install Command: npm ci
- Build Command: npm run build
- Output Directory: dist
- Node.js: 22 ou superior compatível com as dependências
O vercel.json já declara os comandos. Remova configurações antigas de Express ou saída public se estiver reutilizando um projeto. Publique novamente depois de alterar o código.

## 3. Google AI Studio
No modo Build, use + / Add files > Import from GitHub e selecione o novo repositório. A disponibilidade da importação depende da sua conta e interface. Use o texto de PROMPT-AI-STUDIO.txt ao pedir alterações. O site não precisa ser refeito: já existe. O React é padrão para novos apps do AI Studio, mas este projeto conserva HTML/JS com Vite para preservar o resultado. A importação precisa ser verificada no AI Studio; a compilação local não garante o funcionamento da integração de terceiros.
Depois de editar, sincronize as alterações ao GitHub, quando disponível, ou exporte o projeto e atualize o mesmo repositório conectado à Vercel. Editar no AI Studio não atualiza automaticamente um projeto de hospedagem sem sincronização.

## 4. Arquivos para editar
- index.html: textos, seções, cards e marca.
- src/styles.css: design desktop e mobile.
- src/config.js: número do WhatsApp (55 + DDD + número, somente dígitos).
- src/interactions.js: galerias, navegação e orçamento.
- src/motion.js: animações.
- public/assets/: fotos. Use /assets/nome.webp no HTML.
- fontes-das-imagens.json: fontes das imagens demonstrativas.

## 5. Rodar no computador
Instale Node.js 22+, abra o terminal nesta pasta e execute npm ci e npm run dev. Para produção, npm run build. Para conferir o resultado compilado, npm run preview. Abrir index.html com duplo clique não executa este projeto: use o servidor Vite.

Fotos e nome são demonstrativos. Sem configurar o WhatsApp, o formulário prepara uma mensagem para copiar, sem enviá-la.

Documentação: https://ai.google.dev/gemini-api/docs/aistudio-build-mode e https://vercel.com/docs/frameworks/frontend/vite
