const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    create: (params) => {
        return knex.insert(params).into('product'); 
    },

    findById: (params) => {
        return knex.insert(params).into('product').where('id', params.id);
    },

    update: (params) => {
        return knex('product').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('group').del().where('id', params.id);
    }
}