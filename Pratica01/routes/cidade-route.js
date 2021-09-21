const express = require('express');
const routes = express.Router();

//importo o cidadeController
const cidadeController = require('../controllers/cidade-controller');


routes.route('/')
    .get(cidadeController.index)  //lista todos os registros
    .post(cidadeController.create); //insere um registro 

routes.route('/:id')
    .get(cidadeController.show)  //retorna regsitro com o id do parametro
    .put(cidadeController.update) //altera o registro com o id do parametro 
    .delete(cidadeController.delete); //exclui o registro com o id do parametro

module.exports = routes;
