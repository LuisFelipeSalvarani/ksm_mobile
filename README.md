# 📊 Kodiak Sales Manager (KSM)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

O **Kodiak Sales Manager (KSM)** é um aplicativo mobile desenvolvido em **React Native com Expo**, voltado para fornecer uma visualização estratégica e acessível de dados de vendas extraídos do ERP **Kodiak**. Ele oferece uma interface otimizada para dispositivos móveis, facilitando a análise rápida de indicadores de desempenho (KPIs) por representantes comerciais, gerentes e diretores.


## 🎯 Objetivos do Projeto

- 📈 Exibir dados de vendas de forma **intuitiva, interativa e responsiva**, com foco na experiência do usuário.
- 📊 Fornecer **insights visuais e relatórios** que apoiem a tomada de decisão.
- ⚡ Agilizar o acesso a informações estratégicas como **faturamento, volume de vendas, margem de lucro e performance de produtos**.
- 🔄 Integrar-se com o banco de dados do ERP Kodiak para apresentar informações em **tempo real ou próximo disso**.

## 🛠️ Tecnologias Utilizadas

- **React Native** – Framework para desenvolvimento de apps nativos utilizando JavaScript.

- **Expo** – Plataforma que simplifica o desenvolvimento e testes de aplicativos React Native.

- **TypeScript** – Linguagem utilizada no projeto para maior segurança e produtividade.

- **REST API** – Comunicação com o backend que expõe os dados do ERP Kodiak.
## 🚀 Como Rodar o Projeto Localmente

### ✅ Pré-requisitos

- Node.js instalado

- Expo Go instalado no seu celular (disponível na Play Store/App Store)

- API rodando localmente ([instruções aqui](https://github.com/LuisFelipeSalvarani/ksm_api.git))

### 🧪 Passo a Passo

1. Clone o repositório:

```bash
  git clone https://github.com/LuisFelipeSalvarani/ksm_mobile.git
```

2. Acesse o diretório do projeto:

```bash
  cd ./ksm_mobile
```

3. Instale as dependências:

```bash
  npm install
```

4. Crie um arquivo `.env` na raiz do projeto com a URL da API:

```
    EXPO_PUBLIC_API_URL="https://sua-api-url.com"
```

5. Inicie o projeto com o Expo:

```bash
  npx expo start
```

6. Abra o app:

- Pressione `a` no terminal para abrir no emulador Android (se disponível)

ou

- Escaneie o QR Code com o app Expo Go no seu celular.


## 📌 Observações Finais

Este projeto foi desenvolvido como parte de um trabalho acadêmico, demonstrando a aplicação de tecnologias modernas na análise de dados corporativos. O KSM visa otimizar a experiência de consulta de informações para equipes comerciais, integrando dados reais do ERP Kodiak de forma prática e visualmente acessível.