<!-- Este é um comentário: omitir os tópidos redundantes -->
<!--  **| [Brazil](README.md) | [asdf](README_en.md) |** -->

# Smith Store

[Documentação da API no Postman](https://documenter.getpostman.com/view/30159355/2s9YRB3Y1d)

Smith Store API é uma solução completa para gerenciar uma loja de ferreiros. Esta API oferece operações relacionadas a produtos, autenticação e pedidos. Desenvolvida com foco na qualidade e seguindo a metodologia TDD (Test-Driven Development), a API adota uma arquitetura em camadas consistente com Model, Service e Controller (MSC) e o esquema do banco de dados utiliza o Diagrama de Entidade-Relacionamento (DER).

## Ferramentas Utilizadas

- **Tecnologias Principais:**
  - Node.js
  - Express.js
  - MySQL Server

- **Testes:**
  - Mocha
  - Chai
  - Sinon

- **Documentação:**
  - Swagger
  - Postman

## Pré-Requisitos

Utilize o Docker:

- [Docker & Docker Compose](https://docs.docker.com/compose/)

<!-- ## Features -->
## Instalação

<details>

<summary>Com Docker</summary>

1. Clonar o Repositório

    Primeiro, copie ou clone este repositório para o seu sistema local usando o Git:

    ```bash
    git clone git@github.com:lionelsu/smith-store-api.git && cd smith-store-api
    ```

2. Iniciar o Contêiner Docker

    Utilize o Docker Compose para iniciar o contêiner do Smith Store API:

    ```bash
    docker compose up -d
    ```

3. Popular o Banco de Dados

    Utilize o Docker para popular o banco de dados:

    ```bash
    docker exec smithstore_api npm run db:reset
    ```

4. Acesse a documentação da API no navegador:

    ```http
    http://127.0.0.1:3001/v1/docs/
    ```

</details>

<details>

<summary>Localmente com NodeJs</summary>

1. Clonar o Repositório

    Primeiro, copie ou clone este repositório para o seu sistema local usando o Git:

    ```bash
    git clone git@github.com:lionelsu/smith-store-api.git && cd smith-store-api
    ```

2. Instalar as Dependências

    Em seguida, instale as dependências do projeto usando o `npm`:

    ```bash
    npm install
    ```

3. Popular o Banco de Dados

    ```bash
    npm run db:reset
    ```

4. Iniciar o Servidor

    Inicie o servidor para executar a API:

    ```bash
    npm run dev
    ```

5. Acesse a documentação da API no navegador:

    ```http
    http://127.0.0.1:3001/v1/docs/
    ```

</details>

## Uso

Para interagir com o Smith Store, você pode usar os seguintes comandos:

Visualização de Logs

```bash
docker logs -n 10 -f smithstore_api
```

Linha de Comando Interativa, usada para **[testar](#testes)** a aplicação

```bash
docker exec -it smithstore_api bash
```

Resetar o Banco de Dados (deve ser executado dentro da **[linha de comando interativa](#uso)**)

```bash
npm run db:reset
```

## Rotas da API

**Produtos:**

- **`POST /products`**: Cadastra um novo produto.
- **`GET /products`**: Retorna todos os produtos cadastrados.

**Pedidos:**

- **`POST /orders`**: Cadastra um novo pedido.
- **`GET /orders`**: Retorna todos os pedidos cadastradas.

## Testes

- Dentro da **[linha de comando interativa](#uso)**, você pode executar os seguintes testes:

  - Testes Unitários:

  ```bash
  npm run test:mocha
  ```

  - Cobertura de Testes:

  ```bash
  npm run test:coverage
  ```

## Habilidades desenvolvidas

Desenvolvi minha aplicação usando `Node.js` com `Express.js` como base. Isso me permitiu criar facilmente endpoints `HTTP` para atender às necessidades do sistema.

Escolhi usar o banco de dados `MySQL Server` para armazenar informações sobre produtos, vendas e outros aspectos importantes do sistema.

Para garantir a qualidade do código, realizei testes rigorosos com `Mocha`, `Chai` e `Sinon`. Esses testes verificaram minuciosamente os endpoints, serviços e funções para garantir que tudo funcione corretamente.

Documentei a `API` usando o `Swagger`, que fornece informações detalhadas sobre as rotas, parâmetros e exemplos práticos.

Também criei uma coleção no `Postman` para facilitar os testes e interações com a `API`.

Com essas etapas concluídas, estou confiante na entrega de uma `API` sólida e funcional, pronta para atender às necessidades dos usuários.
