const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o estadoController
const estadoController = require('../controllers/estado-controller');

//Rotas raís (/)
routes.route('/')
    .get(estadoController.index)       //Retorna todos os registro
    .post(estadoController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(estadoController.show)        //Retorna registro com o ID do parâmetro
    .put(estadoController.update)      //Altera o registro com o ID do parâmetro
    .delete(estadoController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;