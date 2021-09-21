const express = require('express');
const express = require('./routes');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(routes);

//rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
})

 
app.listen(3000, () => {
    console.log(`Executando na porta $(PORT)`)

});