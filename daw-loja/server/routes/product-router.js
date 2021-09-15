const express = require('express');
const routes = express.Router();

//importo o productController
const productController = require('../controllers/product-controller');


routes.route('/')
    .get(productController.index)  //lista todos os registros
    .post(productController.create); //insere um registro 

routes.route('/:id')
    .get(productController.show)  //retorna regsitro com o id do parametro
    .put(productController.update) //altera o registro com o id do parametro 
    .delete(productController.delete); //exclui o registro com o id do parametro

module.exports = routes;
