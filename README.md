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
 * GET  /usuario
 * POST /usuario

    Esquema da requisição
    ```json
    {
     "nome": "Neo",
     "email": "mr.anderson@email.com"
    }
    ```

    Esquema da resposta
    ```json
    {
        "usuario" : {"nome": "Neo",
                     "email": "mr.anderson@email.com"}
    }
    ```

### Tarefa
 * GET /tarefa 
 * POST /tarefa

    Esquema da requisição
    ```json
    {
     "titulo": "Estudar Node",
     "status": "fazendo"
    }
    ```

    Schema da resposta
    ```json
    {
        "tarefa" : {"titulo": "Estudar Node",
                    "status": "fazendo"}
    }
    ```
 

---
---

## Atualizações da Aula

__Aula 08__

Apresentação dos middlewares no express utilizando o `app.use()`. Utilização do `express.json()` dentro do middleware para fazer o parse de do body de das requisições.

Criação da pasta de middleware e demonstração da utilização em um caso de autorização de cliente via informação recebida pelo header.

Troca do tipo de resposta de `res.send()` para `res.json()`.
