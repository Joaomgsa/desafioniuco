# Desafio Backend NIUCO

Este é um projeto desenvolvido como desafio de backend utilizando Next.js. Ele inclui todas as orientações necessárias para o deploy da aplicação tanto em ambiente local quanto na Vercel.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando Localmente](#executando-localmente)
- [Deploy na Vercel](#deploy-na-vercel)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 20.0 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/Joaomgsa/desafioniuco.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

## Executando Localmente

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Deploy na Vercel

A Vercel é a maneira mais fácil de implantar aplicativos Next.js com suporte nativo para projetos Next.js.

1. Se você ainda não possui uma conta na Vercel, crie uma em [vercel.com](https://vercel.com).

2. Instale a Vercel CLI:

    ```bash
    npm install -g vercel
    ```

3. No diretório do seu projeto, execute o comando:

    ```bash
    vercel
    ```

4. Siga as instruções interativas para conectar sua conta Vercel e selecionar o repositório do projeto.

5. Após a configuração inicial, para fazer deploys subsequentes, basta executar:

    ```bash
    vercel --prod
    ```

## Estrutura do Projeto

```plaintext
/.
├── backendchalenge/               # pasta raiz do projeto
├── desafioniuco/
│   ├── pages/api         # Endpoints da API
│   ├── interfaces/       # Definições de tipos e contratos
│   ├── services/         # Services e processamento de dados
│   ├── repository/       # Repositórios 
│   └── ...               # Outros diretórios e arquivos
├── .gitignore            # Arquivos a serem ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
├── README.md             # Documentação do projeto
└── ...                   # Outros arquivos de configuração
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---


## Desafio

    Para acessar o resultado esperado do desafio faça uma requisição GET para o endpoint /api/user.

    http://localhost:3001/api/user
