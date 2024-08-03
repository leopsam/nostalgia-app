# nostalgia-app-back-end

Este projeto serve como uma base para utilização de informações (famoso copiar e colar). Ao longo do tempo, ele se transformará em um projeto bem grande.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript do lado do servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao idioma.
- **Fastify**: Framework web altamente focado em desempenho.
- **ESLint com configuração da Rocketseat**: Ferramenta de linting para manter a qualidade do código, utilizando as recomendações da Rocketseat.
- **Prisma com SQLite**: ORM (Object-Relational Mapping) moderno e seguro para TypeScript e Node.js, utilizando SQLite como banco de dados.
- **Cloudinary**: Serviço de gerenciamento e entrega de mídia para upload de imagens e vídeos.

## Instalação

Para iniciar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/leopsam/nostalgia-app-back-end.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd nostalgia-app-back-end
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```


4. Edite o arquivo .env com as suas configurações:

    ```bash
    #database
    DATABASE_URL="********"
    
    # GitHub
    GITHUB_CLIENT_ID="********"
    GITHUB_CLIENT_SECRET="********"
    
    # Cloudinary
    CLOUD_NAME="********"
    API_KEY="********"
    API_SECRET="********"
    ```
5. Aplique as migrações do Prisma:

    ```bash
    npx prisma migrate deploy
    ```
6. Gere o cliente Prisma:

    ```bash
    npx prisma generate
    ```
7. Inicie o servidor:

    ```bash
    npm run dev
    ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run lint`: Executa o ESLint para análise estática do código.
- `npm run lint:fix`: Corrige automaticamente problemas encontrados pelo ESLint.
- `npm run format`: Formata o código usando Prettier.
- `npm run lint:fix:format`: Corrige problemas do ESLint e formata o código com Prettier.

## Configuração do Cloudinary

Este projeto utiliza o Cloudinary para o gerenciamento e upload de imagens e vídeos. Certifique-se de configurar as variáveis de ambiente `CLOUD_NAME`, `API_KEY` e `API_SECRET` com suas credenciais do Cloudinary.

## Configuração do GitHub

O projeto permite o login automático de usuários com o GitHub. Configure as variáveis de ambiente `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET` com suas credenciais do GitHub.

