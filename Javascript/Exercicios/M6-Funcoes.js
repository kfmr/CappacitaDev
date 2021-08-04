/* 2) Crie as funções parametrizadas a seguir:
a) Uma função que receba dois valores por parâmetro e multiplique um pelo
outro
b) Uma função que receba dois valores e retorne o menor deles, se forem
iguais retorne que são iguais
c) Uma função que receba um array e imprima todos os itens */

const multiplicar = (num1, num2) => {
    return num1 * num2
}

console.log(multiplicar(2, 2))

function menorOuIgual(value1, value2) {
    return value1 === value2 ? "São iguais" : "É menor ou não é do mesmo tipo"
}

console.log(menorOuIgual(7, "a"))

function iterarArray(array) {
    for (item of array) {
        console.log(item)
    }
}
const fruits = ["morango", "kiwi", "tangerina", "abacate", "limão"]
iterarArray(fruits)


const listaDadosClientes = [{
        nome: 'Daiane',
        idade: 24,
        endereco: 'Rua Freire, 24, Consolação, São Paulo'
    },
    {
        nome: 'Gabriel',
        idade: 19,
        endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
    },
    {
        nome: 'Bruno',
        idade: 37,
        endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
    }
]
/* Uma função que receba um o array listaDadosCliente e retorne outro array
contendo somente os endereços destes clientes */
function retornaEndereco(lista) {
    const listaEndereco = []
    for (item in lista) {
        listaEndereco.push(lista[item].endereco)
    }
    return listaEndereco
}

console.log(retornaEndereco(listaDadosClientes))
/* Uma função que receba um o array listaDadosCliente e retorne outro array
contendo somente os nomes desses cliente */
function retornaNome(lista) {
    const novaLista = []
    for (item of lista) {
        novaLista.push(item.nome)
    }
    return novaLista
}

console.log(retornaNome(listaDadosClientes))