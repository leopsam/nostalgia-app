# nostalgia-app-back-end

Este projeto serve como uma base para utilização de informações (famoso copiar e colar). Ao longo do tempo, ele se transformará em um projeto bem grande.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript do lado do servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao idioma.
- **Fastify**: Framework web altamente focado em desempenho.
- **ESLint com configuração da Rocketseat**: Ferramenta de linting para manter a qualidade do código, utilizando as recomendações da Rocketseat.
- **Prisma com SQLite**: ORM (Object-Relational Mapping) moderno e seguro para TypeScript e Node.js, utilizando SQLite como banco de dados.

## Instalação

Para iniciar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/leopsam/nostalgia-app.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd nostalgia-app
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute as migrações do Prisma para criar o banco de dados SQLite:
    ```bash
    npx prisma migrate dev --name init
    ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run lint`: Executa o ESLint para análise estática do código.