const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o groupController
const groupController = require('../controllers/group-controller');

//Rotas raís (/)
routes.route('/')
    .get(groupController.index)       //Retorna todos os registro
    .post(groupController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(groupController.show)        //Retorna registro com o ID do parâmetro
    .put(groupController.update)      //Altera o registro com o ID do parâmetro
    .delete(groupController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;