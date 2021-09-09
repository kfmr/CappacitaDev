
// instanciar a biblioteca express
const express = require('express')
// instanciar dotenv  - uso de variaveis de ambiente
require('dotenv').config();

// instanciar o express para uso das métodos
const app = express();

// configurar variavel de ambiente da porta
const port = process.env.PORT;
// requerir o módulo database.js
const database = require('./database/databaseModel.js');


// requerir a leitura do json e urlenconded no corpo da requisição
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// req, res
app.get('/pokemons', async (req,res) => {
    const pokemons = await database.getAllData() 
    res.status(200).send(pokemons)
    
});

app.get('/pokemons/:id', async (req,res) => {
    const response = await database.getOneData(req.params.id)
    res.status(200).send(response)

});


app.post('/pokemons', async(req,res) => {
    const pokemon = await database.saveData({
        id: req.params.id,
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
});

app.put('/pokemons/:id', async (req,res) => {
    const pokemon = await database.updateData(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id', async(req,res) => {
        const result = await database.deleteData(req.params.id)
        if(result){
            res.status(200).send("Registro removido com sucesso")
        } else {
            res.status(404).send("Registro não existe na base")
        }
})




app.listen(port, () => {
    console.log(`aplicação executando na porta ${port}`)
})