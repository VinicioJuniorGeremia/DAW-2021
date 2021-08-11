const express = require('express');
const app = express();

//rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')

});