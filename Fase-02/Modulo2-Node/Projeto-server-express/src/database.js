const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const pokemons = []

function saveData(pokemon) {
    if(!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    
    return pokemon
}

function getOneData(id) {
    return pokemons[id]
    //return pokemons[id] || {}
}

function getAllData(){
    return Object.values(pokemons)
}

function updateData(id,pokemon){
    pokemons[id] = pokemon
    return pokemon
}

function deleteData(id){
    const deletedPoke = pokemons[id]
    pokemons.splice(id,1)
    pokemons.forEach((pokemon) => {
    if(pokemon.id > id){
        pokemon.id = pokemon.id - 1

    }
    })
    return deletedPoke
}

module.exports = {
    saveData,
    getAllData,
    getOneData,
    updateData,
    deleteData
}