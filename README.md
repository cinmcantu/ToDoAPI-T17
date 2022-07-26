# :construction: WIP - ToDo API - T17 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o SQLite.

## Pré-Requisitos

* Node.js  v.16.15.1
* NPM v.8.11.0

## Packages

* Express
* Nodemon
* SQLite

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/cinmcantu/ToDoAPI-T17.git
```

Entrando na pasta:
```
cd ToDoAPI-T17
```

Instalando os pacotes:
```
npm install
```

Rodando o projeto:
```
npm start
```

## Rotas implementadas

### Usuário
 * __GET  /usuario__

    Esquema da resposta
    ```json
    {
        "usuarios": [
            {
                "id": 1,
                "nome": "Neo",
                "email": "mr.anderson@email.com",
                "senha": "SenhaSuperSegura123456!"
            }
        ],
        "erro": false
    }
    ```

 * __GET  /usuario/email/:email__

    Esquema da resposta
    ```json
    {
        "usuario": [
            {
                "id": 1,
                "nome": "Neo",
                "email": "mr.anderson@email.com",
                "senha": "SenhaSuperSegura123456!"
            }
        ],
        "erro": false
    }
    ```

 * __POST /usuario__

    Esquema da requisição
    ```json
    {
        "nome" : "Neo",
        "email" : "mr.anderson@email.com",
        "senha" : "SenhaSuperSegura123456!"
    }
    ```

    Esquema da resposta
    ```json
    {
        "msg": "Usuário inserido com sucesso",
        "usuario": {
            "id": 1,
            "nome": "Neo",
            "email": "mr.anderson@email.com",
            "senha": "SenhaSuperSegura123456!"
        },
        "erro": false
    }
    ```

 * __PUT /usuario/email/:email__

    Esquema da requisição
    ```json
    {
        "nome" : "Novo Neo",
        "email" : "mr.anderson@email.com",
        "senha" : "NovaSenhaSuperSegura123456!"
    }
    ```

    Esquema da resposta
    ```json
    {
        "msg": "Usuário com email mr.anderson1@email.com atualizado com sucesso",
        "usuario": {
            "id": 1,
            "nome" : "Novo Neo",
            "email" : "mr.anderson@email.com",
            "senha" : "NovaSenhaSuperSegura123456!"
        },
        "erro": false
    }
    ```

 * __DELETE  /usuario/email/:email__

    Esquema da resposta
    ```json
        {
            "msg": "Usuário com email mr.anderson@email.com deletado com sucesso",
            "erro": false
        }
    ```

### Tarefa
 * __GET /tarefa__

    Esquema da requisição
    ```json
    {
        "tarefas": [
            {
                "id": 0,
                "titulo": "Estudar Node",
                "descricao": "Fazer o Módulo 4 da Resilia",
                "status": "fazendo",
                "dataCriacao": "2022-07-20T02:59:19.454Z"
            }
        ],
        "erro": false
    }
    ```

 * __GET /tarefa/titulo/:titulo__

    Esquema da requisição
    ```json
    {
        "tarefa": [
            {
                "id": 0,
                "titulo": "Estudar Node",
                "descricao": "Fazer o Módulo 4 da Resilia",
                "status": "fazendo",
                "dataCriacao": "2022-07-20T02:59:19.454Z"
            }
        ],
        "erro": false
    }
    ```

 * __POST /tarefa__

    Esquema da requisição
    ```json
    {
        "titulo" : "Estudar Node",
        "descricao": "Fazer o Módulo 4 da Resilia",
        "status": "fazendo"
    }
    ```

    Schema da resposta
    ```json
    {
        "msg": "Tarefa inserida com sucesso",
        "tarefa": {
            "id": 0,
            "titulo": "Estudar Node",
            "descricao": "Fazer o Módulo 4 da Resilia",
            "status": "fazendo",
            "dataCriacao": "2022-07-20T02:59:19.454Z"
        },
        "erro": false
    }
    ```
 
 * __PUT /tarefa/titulo/:titulo__

    Esquema da requisição
    ```json
    {
        "titulo" : "Estudar Node",
        "descricao": "Fazer o Módulo 4 da Resilia",
        "status": "concluido"
    }
    ```

    Schema da resposta
    ```json
    {
        "msg": "Tarefa com título Estudar Node atualizada com sucesso",
        "tarefa": {
            "id": 0,
            "titulo": "Estudar Node",
            "descricao": "Fazer o Módulo 4 da Resilia",
            "status": "concluido",
            "dataCriacao": "2022-07-20T02:59:19.454Z"
        },
        "erro": false
    }
    ```

 * __DELETE /tarefa/titulo/:titulo__

    Esquema da requisição
    ```json
    {
        "msg": "Tarefa com titulo Estudar Node deletada com sucesso",
        "erro": false
    }
    ```

---
---

## Atualizações da Aula

__Aula 12__

Instalação do SQLite, que será o banco de dados utilizado no projeto.

Criação dos arquivos para criar e popular as tabelas do banco de dados e do arquivo que irá exportar a instância que será utilizada para as queries.

Criação do arquivo `database.db`, que é nosso banco de dados.

Chamadas das queries nos controllers, apenas a nível de teste. 

