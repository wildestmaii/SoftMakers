# Projeto 31 - SoftMakers: Trilha de Aprendizagem

Professor: Waldeck Lindoso

Dias/Turno: Terças e quintas, tarde

**Visão Geral do Projeto**

O projeto visa desenvolver uma plataforma web que permita o acompanhamento e desenvolvimento de trilhas de aprendizagem para programadores e designers, com a participação ativa do departamento de RH. A plataforma tem como objetivo principal promover o crescimento profissional e aprimorar as habilidades técnicas e comportamentais dos funcionários.

**Link da apresentação**

https://www.canva.com/design/DAF5uMFn6NQ/VFIDGkmG9AgycefP4zUv3Q/view?utm_content=DAF5uMFn6NQ&utm_campaign=designshare&utm_medium=link&utm_source=editor

**Como executar o projeto:**

- Instale as dependências do projeto rodando o comando a seguir no terminal dentro da pasta do projeto:
    
    ```bash
    yarn add
    ```
    

- Crie e configure o arquivo .env de acordo com o seu servidor MySQL
    
    ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=
    DB_PASS=
    DB_NAME=softmakers
    
    PORT=3000
    ```
    

- Inicie o servidor rodando o comando a seguir no terminal:
    
    ```bash
    yarn dev
    ```
    

- Crie as migrations rodando o comando a seguir no terminal:
    
    ```bash
    yarn migration:generate
    ```
    
- Execute as migration também pelo terminal:
    
    ```bash
    yarn migration:run
    ```
    
- Faça as requisições HTTP através do arquivo .html ou na ferramenta de teste de API de sua preferencia

    (imagem)

**Documentação**

(...)



**Integrantes:**

Daniel Viana

Diogo Vila Nova

Everton Dias

Kauã Rameh

Lucas Silveira

Maiara Evelyn