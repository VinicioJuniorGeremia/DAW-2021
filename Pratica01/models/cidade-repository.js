const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select('estado_sigla').from('cidade as c').innerJoin('estado as e', 'e.id', 'p.estado_id');
    },
    
    create: (params) => {
        return knex.insert(params).into('cidade'); 
    },

    findById: (params) => {
        return knex.select('estado_sigla').from('cidade').where('id', params.id).innerJoin('cidade_id', 'estado_id')
    },

    update: (params) => {
        return knex('cidade').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('cidade').del().where('id', params.id);
    }
}