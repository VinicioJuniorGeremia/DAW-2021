const express = require('express');
const routes = express.Router();

//DADOS
const produtos = [
    {id: 1, nome: 'Suco de laranja', litros: 0.5, preco: 3},
    {id: 2, nome: 'Suco de uva', litros: 1, preco: 5},
    {id: 3, nome: 'Suco de abacaxi', litros: 0.5, preco: 3}
];

routes.get('/produtos', (req, res) => {
    res.send(produtos);
});

routes.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;

    res.send(produtos[index]);
});

module.exports = routes;