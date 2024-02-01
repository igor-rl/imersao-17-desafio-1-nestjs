![header-igor-projetos](./assets/src/img/github-projetcs-header.jpg)

# FullCycle Imersão 17 - Desafio 1 - API Rest de Ordens de Compra

## Iniciar a aplicação

```
yarn && yarn start:dev
```

## Testes da aplicação
Utilize o arquivo `api.http`.

## Detalhes do desafio
Neste desafio, você deve criar uma aplicação Nest.js que rode localmente na porta 3000.

A aplicação precisa expor 2 rotas de API Rest::
- Listar assets - POST /api/assets
- Criar assets - GET /api/assets
- Criar orders - POST /api/orders
- Listar orders - GET /api/orders

Um asset tem os seguintes dados:
- id (é informado pelo usuário)
- symbol (símbolo do ativo)

Uma order tem os seguintes dados:
- id automático do banco
- asset_id (relacionado com Asset)
- price
- status (open, pending, closed) (não pode deixar mandar o status no POST)

O ORM a ser usado é o TypeORM e o banco de dados precisa ser o SQLite

## Requisitos adicionais:


1. Utilize o TypeORM para definir os modelos (Asset e Order) e configurar a conexão com o banco de dados SQLite.


2. Configure o relacionamento entre Order e Asset de forma que ao criar uma ordem, o usuário possa enviar o asset_id correspondente ao ativo desejado.


3. Utilize a opção cascade do TypeORM para permitir a criação de uma ordem junto com um novo ativo, se o ativo ainda não existir.


4. Utilize eager loading para garantir que, ao listar as orders, os dados do ativo associado (Asset) também sejam carregados.


5. Crie o arquivo api.http para fazer chamadas HTTP e teste as operações de criar/listar assets e orders.


Certifique-se de que todas as funcionalidades estão implementadas corretamente e que os relacionamentos e o eager loading estão funcionando conforme especificado.



Boa sorte!


##

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Igor_Lage-blue?style=social&logo=github)](https://github.com/igor-rl) 

![Static Badge](https://img.shields.io/badge/01--02--2024-black)


</div>