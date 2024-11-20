// Nesta aula, será explicado o conceito de isolamento de ambiente nos testes end-to-end (e2e), com foco na necessidade de se ter um banco de dados de testes separados do banco de dados de produção. Será implementado um Test Environment do Vitest para o Prisma, que permitirá a criação de um ambiente de testes isolado para os testes e2e.

// Nota 1: No arquivo prisma/vitest-environment-prisma/prisma-test-environment.ts, é preciso adicionar uma nova propriedade:

// transformMode: 'ssr',
// Nota 2: Caso tenha buildado a aplicação e/ou tenha se deparado com erros No test suite found ao rodar os testes, você pode:

// Editar o arquivo vite.config.ts e adicionar dentro de test: dir: 'src'
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    dir: 'src', // Essa linha
  },
});
