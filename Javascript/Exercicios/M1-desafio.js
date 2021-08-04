/* Sua função deve retornar uma nova lista contendo apenas os clientes que possuem idade
igual ou maior que 18 e menor ou igual a 26. */
const dadosClientes = [
    {
    nome: "Lucas",
    sobrenome: "da Silva",
    idade: 21,
    genero: "Masculino",
    plano: "full",
    carencia: false,
    aquisicao: "12/01/2019"
    },
    {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 26,
    genero: "Feminino",
    plano: "medium",
    carencia: false,
    aquisicao: "17/03/2019"
    },
    {
    nome: "Adriana",
    sobrenome: "Menezes",
    idade: 27,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020"
    }
]


idade18ate26 = (array) => {
    const idadeClientes = []
    for(i = 0; i < array.length; i++) {
           array[i].idade >= 18 && array[i].idade <=26 ? idadeClientes.push(array[i]) : idadeClientes 
         }
  return idadeClientes
}

console.log(idade18ate26(dadosClientes)) 

// .map()
idade18ate26 = (array) => {
    const idadeClientes = []
      array.map(function(elemento) {
        elemento.idade >= 18 && elemento.idade <=26 ? idadeClientes.push(elemento) : idadeClientes
      
    })
   return idadeClientes
}

console.log(idade18ate26(dadosClientes)) 




/* operador ternário */
module.exports.retornaLista = (array) => {
    const idadeClientes = []
    for(let i = 0; i < array.length; i++) {
        array[i].idade >= 18 && array[i].idade <=26 ? idadeClientes.push(array[i]) : idadeClientes 
         }
    
     return idadeClientes
    
}
/* if */ 
module.exports.retornaLista = (array) => {
    const idadeClientes = []
    for(let i = 0; i < array.length; i++) {
        if(array[i].idade >= 18 && array[i].idade <=26) {
            idadeClientes.push(array[i]) 
         } 
      
    }
  return idadeClientes
}

