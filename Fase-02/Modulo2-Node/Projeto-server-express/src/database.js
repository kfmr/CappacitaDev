const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const pokemons = {

}


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

module.exports = {
    saveData,
    getAllData,
    getOneData,
    updateData
}