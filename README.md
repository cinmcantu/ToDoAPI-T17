# :ballot_box_with_check: ToDo API - T17 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o SQLite.

##  :pencil2: Pré-Requisitos

* Node.js  v.16.15.1
* NPM v.8.11.0

## :outbox_tray: Packages

* Express
* Nodemon
* SQLite
* Jest
* Super Test

## :outbox_tray: Instalação da Aplicação

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

## :open_file_folder: Reinicializando Banco de Dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:
```
npm run populate
```

## :bug: Testes

Os testes foram implementados utilizando Jest e Super Test. Para executá-los, rode o comando no terminal:
```
npm test
```

## :trolleybus: Rotas implementadas

### Usuário
 * __GET  /usuario__

    Esquema da resposta
    ```json
    {
        "usuarios": [
            {
                "ID": 1,
                "NOME": "Neo",
                "EMAIL": "mr.anderson@email.com",
                "SENHA": "SenhaSuperSegura123456!"
            }
        ],
        "total": 1,
	    "erro": false
    }
    ```

 * __GET  /usuario/email/:email__

    Esquema da resposta
    ```json
    {
        "usuario": {
            "ID": 1,
            "NOME": "Neo",
            "EMAIL": "mr.anderson@email.com",
            "SENHA": "SenhaSuperSegura123456!"
        },
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
        "mensagem": "Usuario inserido com sucesso",
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
        "mensagem": "Usuário com email mr.anderson@email.com atualizado com sucesso",
        "erro": false
    }
    ```

 * __DELETE  /usuario/email/:email__

    Esquema da resposta
    ```json
    {
        "mensagem": "Usuário com email mr.anderson@email.com deletado com sucesso",
        "erro": false
    }
    ```

 * __ERROS__
     Esquema da resposta
    ```json
    {
        "mensagem": "Usuário de email neo@email.com não encontrado",
        "erro": true
    }
    ```

---
---

## :computer: Atualizações da Aula

__Aulas da ultima semana__

Criação da DAO para comunicação com o banco de dados através de queries.

Intalação dos frameworks de teste Jest e Super Test e criação dos testes unitários e de integração.

Criação do arquivo `server.js` que agora será resposável por "ligar" o servidor, dessa forma consequimos exportar o arquivo `app.js` e usá-lo no teste de integração.

Instalação do package `cors` que permite que nossa API seja consumida pelo frontend.

---
## :nail_care: REFATORAÇÃO

O projeto passou por uma refatoração, algo muito comum em projetos reais onde, depois de executar o básico, são feitas algumas melhorias no código e alterações para deixá-lo melhor e mais eficiente. As refatorações foram:

*  __Remoção da entidade TAREFA:__ para poder entregar o código mais rápido e poder fazer uma boa refatoração, eu foquei na entidade USUARIO. Para entidade TAREFA bastaria seguir a mesma estrutura inserindo as validações necessárias.

* __Troca de classes por objetos:__ como boa parte do código já estava sendo feita com funções e objetos, eu removi as poucas classes que ainda tinham para manter um padrão.

* __Validações:__ alteração na forma que estavam sendo feita as alterações. Da forma que está agora é possível testá-las de maneira independente além de estarem mais desacopladas e ser possível utilizá-las em lugares diferente do projeto.

* __Testes:__ foram incluidos testes unitários e de integração, os testes unitários estão testando as funções de validação enquanto os testes de integração estão testando cada uma das rotas.

* __Alteração nos retornos da DAO/Model e na resposta do controler:__ essa foi a maior alteração. Para garantir que podemos ter uma visão maior dos erros, a resposta/return que cada um dos arquivos (DAO/Model/Controller) dá está diferente. Agora a model passa o status (status HTTP) para o controller dependendo da resposta que ela recebe da DAO. Dessa forma podemos separar erros do servidor (500) que geralmente ocorrem na controller de erros do clinte (400) que costumam ser pegos na Model/DAO. Todas funções também estão envolvidas por blocos `try/catch` para que nenhum erro passe batido.

    Lembrando: erros 500 ruins são aqueles que "quebram" nossa aplicação por não estarmos esperando que eles ocorram. Erros 500 enviados por nós "de propósito" com um json com a mensagem do que ocorreu não tem problema.

* __Criação de uma função para montar a query de UPDATE:__ a query de UPDATE é a mais complicada quando queremos atualizar apenas alguns parâmetros. Por isso foi criada uma função que monta a query de acordo com o que foi recebido. Dessa forma a rota PUT também consegue receber apenas um atributo para atualizar (assim como a rota PATCH, apenas lembrando que para rota PUT temos que garantir indepotência).
