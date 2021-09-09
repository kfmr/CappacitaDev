const {databaseConnection} = require('./connection')

const pokemons = []

async function saveData(pokemon) {
  
    const queryInsertPokemon = `INSERT INTO pokemon_database.pokemons(poke_name,poke_type,weakness, strength, hp) VALUES('${pokemon.nome}', '${pokemon.tipo}', '${pokemon.fraqueza}', '${pokemon.resistencia}', '${pokemon.hp}')`
    // db conecction executa a query
    const result = await databaseConnection.raw(queryInsertPokemon)

    if(result){
        return {
            id: result[0].insertId,
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            fraqueza: pokemon.fraqueza,
            resistencia: pokemon.resistencia,
            hp: pokemon.hp
            
        }
    }
}
        



async function getOneData(id) {
    const querySelectData = `idPokemons, poke_name,poke_type,weakness, strength, hp FROM pokemon_database.pokemons WHERE idPokemons = ${id} `
    const getData = await databaseConnection.raw(querySelectData)

    return getData[0]
    

}

async function getAllData(){
    const querySelectAllData = `SELECT idPokemons, poke_name,poke_type,weakness, strength, hp FROM pokemon_database.pokemons`
    const selectAllData = await databaseConnection.raw(querySelectAllData)

    return selectAllData[0]
}

function updateData(id,pokemon){
    pokemons[id] = pokemon
    return pokemon
}

function deleteData(id){
    sequence._id = sequence._id - 1
    const deletedPoke = pokemons[id]
    pokemons.splice(id,1)
    pokemons.forEach((pokemon) => {
    if(pokemon.id > id){
        pokemon.id = pokemon.id - 1

    }
    })
    return deletedPoke
}
function batalhaPokemon(id1,id2) {
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10
    
    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp !=0 && pokemon2.hp != 0){
        if(pokemon1.tipo == pokemon2.fraqueza){
            pokemon2.hp -=superEfetivo
        }
        else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp -= naoEfetivo
        }
        else {
            pokemon2.hp -= efetivo
        }
    
    
        if(pokemon1.hp !=0 && pokemon2.hp != 0){
            if(pokemon2.tipo == pokemon1.fraqueza){
                pokemon1.hp -=superEfetivo
            }
            else if(pokemon2.tipo == pokemon1.resistencia){
                pokemon1.hp -= naoEfetivo
            }
            else {
                pokemon1.hp -= efetivo
            }
        }
        if(pokemon1.hp < 0 || pokemon2.hp < 0){
            pokemon1.hp = 0
            pokemon2.hp = 0
        }
        return `Resultado da batalha ${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`
}
}

function healPokemon(id){
    const potion = 20
    if(pokemons[id].hp == 90){
        pokemons[id].hp+=10
    }
    else if (pokemons[id].hp < 100) {
        pokemons[id].hp+= potion
        }
    

    return pokemons[id]
}



module.exports = {
    saveData,
    getAllData,
    getOneData,
    updateData,
    deleteData,
    batalhaPokemon,
    healPokemon
}