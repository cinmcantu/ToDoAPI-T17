# :construction: WIP - ToDo API - T17 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Pré-Requisitos

* Node.js  v.16.15.1
* NPM v.8.11.0

## Packages

* Express
* Nodemon

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
 

---
---

## Atualizações da Aula

__FUNCIONAL__

Branch criada para apresentar o código só usando funções!

