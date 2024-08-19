# Newsletter Subscription WEB

## Descrição

Projeto de página web de inscrição em uma newsletter realizado como teste prático para a [UNLKD](https://unlkd.co)

## Sobre o projeto

### Descrição de desenvolvimento

- Web page de inscrição em uma newsletter.
- Qualidade de código.
- Validações de formulários.
- Componente de feedback para sucesso ou erro do envio de formulário.

### Tecnologias

Para este projeto foram utilizadas as seguintes tecnologias:

- [NodeJS](https://nodejs.org/pt).
- [React](https://react.dev/).
- [NextJS](https://nextjs.org/).
- [Jest](https://jestjs.io/pt-BR/).

## Utilização

### Requisitos

Antes de rodar o projeto tenha certeza de estar com as seguintes tecnologias instaladas no seu PC:

- [NodeJS](https://nodejs.org/pt) na versão 20 ou superior.

### Instalando

#### Baixando

- Faça um clone em seu computador, no terminal digite:
  1. HTTPS:
  ```bash
    $ git clone https://github.com/saulokirchmaier/newsletter-sub-web.git
  ```
  2. SSH:
  ```bash
    $ git clone git@github.com:saulokirchmaier/newsletter-sub-web.git
  ```

### Rodando

- Entre na pasta do projeto:
  ```bash
    cd newsletter-sub-web
  ```
- adicione as variáveis de ambiente em um arquivo `.env.development` na raiz do projeto seguindo o exemplo:

  ```
  NEXT_PUBLIC_BASE_URL=http://localhost:3001
  ```

- Antes de rodar a aplicação web, rode o back-end da aplicação qu se encontra [aqui](https://github.com/saulokirchmaier/newsletter-sub-backend).

- Com o back-end funcionando, rode o comando:
  ```bash
    npm run dev
  ```
- Abra o seu navegador em `http://localhost:3001` ou click [aqui](http://localhost:3001) e teste a vontade.

### Testes

Para os testes foi utilizado o [Jest](https://jestjs.io/pt-BR/).

- Rodando os testes:
  ```bash
    npm run test
  ```

## Agradecimento

Obrigado por ter chegado até aqui.

Um grande abraço.
