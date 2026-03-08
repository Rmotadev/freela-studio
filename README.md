# FreelaStudio | Engenharia Digital B2B 🚀

**FreelaStudio** é uma Landing Page SPA (Single Page Application) de alta conversão, desenhada sob preceitos de UI/UX luxuoso (Minimalismo Dark) e arquitetada para servir como o principal funil de vendas corporativo para agências e desenvolvedores autônomos.

Foi construída visando três pilares irrevogáveis: **Velocidade Bruta** (com React + Vite), **Desempenho em SEO Técnico** e **Facilidade Absoluta de Manutenção Compartimentada**.

---

## 🏗️ Stacks e Tecnologias
- **React 19+** (Renderização via UI Componentizada)
- **Vite** (Build Tool ultrarrápido)
- **Tailwind CSS v4** (Estilização atômica e Injeção via CSS Nativo Engine)
- **React Helmet Async** (Gerenciamento Headless de MetaTags + Open Graph dinâmico)
- **Schema.org** (JSON-LD configurado no root para Rich Snippets do Google)

---

## 📂 Arquitetura de Pastas (Component-Driven)

Todo o aplicativo gigante de "página-única" foi refatorado em micro-módulos para simplificar a escalabilidade e o recálculo de estados do React:

```text
src/
├── data/
│   └── content.js          # ONDE FICA TODO O "COPY" DA PÁGINA: Serviços, Depoimentos, FAQs e Contato.
├── components/
│   ├── layout/             # Componentes globais estáticos
│   │   ├── Header.jsx      # Barra de navegação 
│   │   └── Footer.jsx      # Rodapé padronizado
│   ├── ui/                 # Átomos Inertes e Utilitários 
│   │   ├── FadeInSection.jsx   # Micro engine de animação no Scroll via Intersection Observer
│   │   ├── FloatingWhatsApp.jsx # Botão Fixo 
│   │   └── Icons.jsx       # Repositório Puro de SVGs em XML limpo (Zero lib externas bloqueantes)
│   └── sections/           # Grandes Blocos Independentes da Landing Page
│       ├── HeroSection.jsx
│       ├── ExpertiseSection.jsx
│       ├── ServicesSection.jsx
│       ├── PortfolioSection.jsx
│       ├── FAQSection.jsx  (Otimizada p/ Zero Memória - Renderiza apenas a pergunta aberta)
│       └── ...
├── index.css               # Configuração global de Variáveis Nativas e motor @tailwind v4
├── main.jsx                # Ponto de Injeção Primário DOM
└── App.jsx                 # Orquestrador Maestro de Blocos e configuração Helmet (Tags Head)
```

---

## 🛠️ Como dar Manutenção? (Guia para "Não-Programadores")

### 1. Trocar Preços, Textos ou Adicionar FAQ
Para mudar textos **você NÃO precisa tocar** em nenhum arquivo complexo `.jsx`. Vá até:
👉 `src/data/content.js`

Altere os campos entre aspas das matrizes `(Arrays)`. Os componentes na interface espelharão os dados instantaneamente sem correr risco de apagar *Tags Semânticas*.

### 2. Trocando o Número do WhatsApp Central
Na **primeira linha** do `src/data/content.js`, basta alterar a variável `WHATSAPP_NUMBER`:
```javascript
export const WHATSAPP_NUMBER = "5511999999999"; 
export const CTA_MESSAGE = "Mensagem que já vai pré-escrita para você...";
```
*Isto atualizará o botão flutuante e os botões fixos das Seções Hero e CTA simuntaneamente.*

### 3. Paleta de Cores e Estética (Tailwind v4)
A folha de design fica integralmente no `src/index.css`.
As cores, espaçamentos personalizados e variáveis fundamentais de marca foram aplicados via utilitários do CSS de acordo com a premissa de **Utility First** do Tailwind css.

---

## ⚡ Setup Local para Desenvolvimento

1. Instalar as dependências essenciais:
   ```bash
   npm install
   ```

2. Ligar o Servidor de Tráfego Rápido HMR do Vite (Monitoramento Ativo):
   ```bash
   npm run dev
   ```

3. Gerar o compilação (Build) Final de Alta Performance e Minificação extrema para Produção (Vercel / Netlify / Hostgator):
   ```bash
   npm run build
   ```
   *(Uma pasta `dist/` será gerada. Você publicará apenas os arquivos vitais contidos nela na sua hospedagem em nuvem).*

---

## 📈 Táticas Exclusivas de SEO Implantadas
- **Index.html nativo**: Implementado Favicon em SVG Customizado, Declaração Geográfica `lang="pt-BR"` e pacote JSON-LD do **Schema.org** focado em categorizar a FreelaStudio como prestadora de 'Serviços Profissionais' direto no robô de busca.
- **Alt + Lazy Loading**: Todas as imagens fora da dobra inicial retêm o download e economizam carga 4G até baterem os olhos do usuário.
- **OpenGraph Tags Ativas**: As caixas vermelhas e azuis em previews de WhatsApp/Twitter exibem perfeitamente o título da empresa em altíssima resolução.

---
> Elaborado por Engenharia Estratégica & Antigravity IA 
