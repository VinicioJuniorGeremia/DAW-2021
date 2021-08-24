const express = require('express');
const app = express();

app.use(express.json());

//rota principal
//app.get('/', (req, res) => {
    //res.send(`It's working!`);
//})

//rota home
//app.get('/home', (req, res) => {

//const nome = req.query.nome;

//    res.send(`Seja bem vindo ${nome}!`);
//})

//app.listen(3000, () => {
 //   console.log('Executando na porta 3000')

//})

//rota profile request param
//app.get('/profile/:username', (req, res) => {

    //const useranme = req.params.username;
    
        //res.send(`Você está no perfil de ${username}!`);
    //})
    
    //app.listen(3000, () => {
        //console.log('Executando na porta 3000')
    
   // })
     //rota login request body
    app.get('/login', (req, res) => {

        const user = req.bory;
        conts = {password, username} = req.body;
        
            res.send(`Você está no perfil de ${user.username}!`);
       })
        
        app.listen(3000, () => {
            console.log('Executando na porta 3000')
        
        });