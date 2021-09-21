const express = require('express');
const estadoRouter = require('./routes/estado-route');
const cidadeRouter = require('./routes/cidade-route');

const app = express();

const PORT = 3000;

app.use(express.json());

//rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
})
//Demais rotas
app.use('/estado', estadoRouter);
app.use('/cidade', cidadeRouter);

 
app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)

});
