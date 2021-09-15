const repository = require('../models/product-repository');

module.exports = {

    //Método usado para retornar todos os registros
    index: async (req, res) => {
        try {
            //chama o metodo do repository que retorna todos os registros encontrados. 
            const result = await repository.find();
            //retorna todos os registros encontrados.
            return res.json(result)
            //Se der erro retorna o ero com status 500
        } catch (error){
            return res.status(500).json({message: error.message})
        }
    },

    create: async (req, res) => {
        const product = req.body;
    
        try {
            const result = await repository.create(product);
            result.id = result[0];
            res.status(210).json(result);

        } catch (error){
            return res.status(500).json({message: error.message})
        }
    },

    show: async (req, res) => {
        try {
            const result = await repository.findById(req.params);
            if(result.lenght === 0) {
                return res.status(404).json({message: 'Not found'});
            }

            return res.json(result[0])

        } catch (error){
            return res.status(500).json({message: error.message})
        }
    },

    update: async (req, res) => {
        const product = req.body;
        try {
            const result = await repository.findById(req.params);
            if(result.lenght === 0) {
                return res.status(404).json({message: 'Not found'});
            }

            await repository.update(product); 
            
            res.json(product);

        } catch (error){
            return res.status(500).json({message: error.message})
        }
    },

    delete: async (req, res) => {
        try {
            const result = await repository.findById(req.params);
            if(result.lenght === 0) {
                return res.status(404).json({message: 'Not found'});
            }
            await repository.delet(req.params)
            
            return res.status(204).json(); 

        } catch (error){
            return res.status(500).json({message: error.message})
        }
    },

}