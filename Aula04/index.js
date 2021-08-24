const express = require('express');
const produtoRouter = require('./routes/produto-router');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(produtoRouter);

//rota principal
app.get('/', (req, res) => {
    //res.send(`It's working!`);
})

 
app.listen(3000, () => {
    console.log(`Executando na porta $(PORT)`)

});