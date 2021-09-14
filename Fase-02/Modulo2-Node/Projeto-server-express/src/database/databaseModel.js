const {databaseConnection} = require('./connection')


async function saveData(pokemon) {
  
    const queryInsertPokemon = {
        poke_name: pokemon.nome, 
        poke_type: pokemon.tipo, 
        weakness: pokemon.fraqueza, 
        strength: pokemon.resistencia, 
        hp: pokemon.hp
    }
    // db conecction executa a query
    const result = await databaseConnection(process.env.DB_TABLE).insert((queryInsertPokemon))

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
/*     const getData = await databaseConnection.select('idPokemons','poke_name','poke_type', 'weakness', 'strength', 'hp').from(process.env.DB_NAME)
    
    return getData[id - 1] */
    const getData = await databaseConnection(process.env.DB_TABLE).where({idPokemons: id}).select('idPokemons','poke_name','poke_type', 'weakness', 'strength', 'hp')
    
    return getData
    

}

async function getAllData(){
    const selectAllData = await databaseConnection.select('idPokemons','poke_name','poke_type', 'weakness', 'strength', 'hp').table(process.env.DB_TABLE)

    return selectAllData
}

async function updateData(idPokemons,pokemon){
    
    const queryInsertPokemon = {
        poke_name: pokemon.nome, 
        poke_type: pokemon.tipo, 
        weakness: pokemon.fraqueza, 
        strength: pokemon.resistencia, 
        hp: pokemon.hp
    }
    const result = await databaseConnection(process.env.DB_TABLE).where({idPokemons}).update(queryInsertPokemon)
    console.log(result)

    if(result){
        return {
            idPokemons,
            ...pokemon
            
        }
    }
}
        

async function deleteData(id){
    
    const deletedPokemon = await databaseConnection(process.env.d).where({idPokemons: id}).del()
    
    return deletedPokemon[0]
}



module.exports = {
    saveData,
    getAllData,
    getOneData,
    updateData,
    deleteData,

}