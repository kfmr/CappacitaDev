
// instanciar a biblioteca express
const express = require('express')
// instanciar dotenv  - uso de variaveis de ambiente
require('dotenv').config();

// instanciar o express para uso das métodos
const app = express();

// configurar variavel de ambiente da porta
const port = process.env.PORT;
// requerir o módulo database.js
const database = require('./database.js');


// requerir a leitura do json e urlenconded no corpo da requisição
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// req, res
app.get('/pokemons', (req,res) => {
    res.send(database.getAllData())
});

app.get('/pokemons/:id', (req,res) => {
    //res.send(database.getOneData(req.params.id));
    if(database.getOneData(req.params.id)) {
        res.status(200).send(database.getOneData(id));
    }
    else {
        res.status(404).send("Id não encontrado")
    }
});

app.post('/pokemons', (req,res) => {
    const pokemon = database.saveData({
        id: req.params.id,
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
});

app.put('/pokemons/:id', (req,res) => {
    const pokemon = database.updateData(req.params.id, {
        id: req.params.id,
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
})
app.listen(port, () => {
    console.log(`aplicação executando na porta ${port}`)
})