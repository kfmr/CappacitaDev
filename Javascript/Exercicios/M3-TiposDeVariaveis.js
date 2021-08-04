/*
a) Crie o seu próprio objeto endereco contendo um endereço separando os atributos rua,
numero, bairro, cidade, estado e cep
b) Imprima todos os dados contidos no seu objeto
c) Imprima apenas a rua
d) Imprima apenas a cidade


*/ 

let endereco = {
	rua: "Rua Santos Dumont",
	numero: 507,
	bairro: "Centro",
	cidade: "Cordeirópolis",
	estado: "SP",
	cep: "13490-970"
}

console.log(endereco)
for(value in endereco) {
	// itera pelo indice
	console.log(endereco[value])
}

console.log(endereco.rua)
console.log(endereco.cidade)


/*
a) Crie um array
b) Imprima todos os itens
c) Altere o conteúdo na última posição
d) Imprima novamente para verificar se alterou



*/
const fruits = ["morango", "kiwi", "tangerina", "abacate", "limão"]

fruits[fruits.length -1] = "banana"
for(item of fruits) {
	// itera pelo elemento
	console.log(item)
}

/*
a) Crie um array meuNome contendo seu nome completo
b) Imprima na tela a quantidade de caracteres na variável meuNome utilizando o método
.length()
c) Com a variável meuNome invés de imprimir diretamente, guarde na variável qtdLetras
a quantidade de caracteres utilizando o método .length(). Imprima qtdLetras.
d) Na variável minhaFrase = “Vou praticar muito para aprender” imprima qual a posição
no índice do primeiro caractere “p”. Use indexOf()

*/
const nome = "um nome aleatorio";

const qtdLetras = nome.length;

const minhaFrase = "Vou praticar muito para aprender";

console.log(minhaFrase.indexOf('p'))
console.log(minhaFrase.indexOf('para'))
console.log(minhaFrase.includes('w'))
/*
Num condomínio moram:
José no apartamento 12A, que possui a vaga de garagem número 4 e não possui
pets.
Alice no apartamento 21B, que possui a vaga de garagem número 14 e possui animais
de estimação.
Ana Clara no apartamento 02A, vaga de garagem 10 e não possui pets.
Levi no apartamento 09B, vaga de garagem 1 e possui pets
Igor no apartamento 17B, vaga de garagem 11 e possui pets
a) Crie o array cadastroMoradores e guarde essas informações.
b) Imprima somente os dados do Igor
c) Ana Clara adotou um gatinho, altere a informação na sua variável
d) Imprima somente os dados da Ana Clara
e) Imprima na tela a quantidade de moradores usando
console.log(cadastroMoradores.length

*/

let cadastroMoradores = [
	{ 
		nome: "José", 
		apartamento: "2A",
		vagaGaragem: 4,
		possuiPet: false,
	},
	{
		nome: "Alice",
		apartamento: "21B",
		vagaGaragem: 14,
		possuiPet: true
	},
	{
		nome: "Ana Clara",
		apartamento: "2A",
		vagaGaragem: 10,
		possuiPet: false
	},
	{
		nome: "Levi",
		apartamento: "09B",
		vagaGaragem: 1,
		possuiPet: true
	},
	{
		nome: "Igor",
		apartamento: "17B",
		vagaGaragem: 11,
		possuiPet: true
	}
]

console.log(cadastroMoradores[cadastroMoradores.length -1])

cadastroMoradores[2].possuiPet = true
console.log(cadastroMoradores[2])

console.log(cadastroMoradores.length)