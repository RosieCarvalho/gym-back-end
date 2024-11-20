# APP

- back-end para gerenciar acesso de alunos a academia
- usando microframework **_fastify_**

# Banco de dados

## DOCKER

- conceito: forma de subir bancos de forma "virtual" sem precisar instalar coisas na própria maquina. os conteiners são contexto isolados.

### PostgreSQL com Docker

- imagem: https://hub.docker.com/r/bitnami/postgresql
- gerar o docker
  ```
  docker run --name postgresql -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432-5332 bitnami/postgresql:latest
  ```
- listar containers
  ```
  docker ps
  ```
- iniciar a imagem criada
  ```
  docker start apisolid
  ```
- conexão
  url: .env

#### docker composer

- usado para ter um arquivo na aplicação para especificar de como deve ser o container da aplicação (docker-compose.yml). o comando de "gerar docker" fica traduzido no arquivo.

- para rodar o container
  ```
    docker composer up -d
  ```

## ORM

- ORM Conceito: trazem um alto nível de abstração para se relacionar com o banco de dados( e se conectam com vários bancos de dados). Mapear tabelas do banco de dados para estruturas dentro do código.(ex: em classes). Ele é mais refinado do que os querys builds, pois estes são mais limitados, por exemplo, as migrations(controle de versão das tabelas) são realizadas de forma automáticas

- ORM usado no projeto: **_PRIMA ORM_**

- iniciar

```
 npx prisma init
```

**_todas tabelas dos bancos estão em: prisma/schema.prisma_**

- gerar migrations

```
 npx prisma migrate dev
```

# Testes automatizados

```
 npm i vitest vite-tsconfig-paths  -D
```

- config: vite.config.js

- coverage: cobertura de teste

```
 vitest run --coverage
```

- coverage-ui

## testes E2E

-- usando contextos com https://vitest.dev/guide/environment
-- guia de configuração: configE2E.ts
-- config: prisma\vitest-environment-prisma
-- para rodar

- manual

  - dentro da pasta prisma\vitest-environment-prisma: npm link
  - na raiz:npm link vitest-environment-prisma

- automatizada

  - instal : npm i npm-run-all
  - npm run pretest:e2e

- lib usada

```
 npm i supertest
```

# Autenticação

## JWT

```
   npm install @fastify/jwt
```

- config: app.ts
- uso: controllers\users\authenticate.ts

# Qualidade de código

- variaveis ambiente: dotenv

  - configuração: env/index.ts

- aliases de importação:

  - dentro do tsconfig:

  ```
      "baseUrl": "./",
      "paths": {
          "@/*": ["./src/*"]
        },
  ```

  - imemory => para usar dentro dos testes

### SOLID

#### D - inversão de dependência

- ao inves da classe instanciar as dependencias, ela recebe como parâmetro no construtor

### factory Pattern

- fabrica de dependencias. arquivos que instanciam as dependencias de um determinado item. exemplo: use-cases/factories

### TDD (desenvolvimento dirigido a testes)

- é uma metodologia que cria o teste primeiro e depois implementa de fato o metodo

# CI/CD

## CI:

- continuos integration - processo de receber código no repositório e fazer verificações e validações para consegui receber de forma mais automatizada novos códigos ali dentro

### github actions

- config: .github/workflows (workflows é uma esteira de comandos)

## CD

- continuos deployment/Delivery - o processo de receber codigo e fazer deploy de forma automática
