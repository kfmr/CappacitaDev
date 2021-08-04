//Faça um loop que imprima na tela uma contagem de 0 a 10

for (let index = 0; index <= 10; index++) {
	console.log(index)
	
}
//Loop ue imprima a multiplicação por 2 dos números de 1 a 5
for(i=1; i<=5; i++) {
	console.log(i * 2)
}

//4) Faça um loop que imprima os números em contagem regressiva de 20 a 0
for(i=20; i >=0; i--) {
	console.log(i)
}
//5) Faça um loop que imprima todos os itens do array 
const doces = ["bala","pirulito","chiclete","jujuba","chocolate"]

for (value in doces) {
    //itera pelo indice 
	console.log(doces[value])
}

//6) Faça um loop que procure no array doces a palavra pirulito e troque por doce de leite
const doces = ["bala","pirulito","chiclete","jujuba","chocolate"]

for (value in doces) {
	if(doces[value] == "pirulito"){
		doces[value] = "doce de leite"
	}
}
console.log(doces)
//8) Faça um loop que multiplique por 2 somente os números pares do array
let numeros = [1,2,3,4,5,6,7,8,9,10]

for(num of numeros) {
	if(num % 2 == 0){
		console.log(num * 2)
	}
}
//faça um loop que imprima somente os nomes dos clientes no array de objetos
let listaClientes = [{
        nome: "Larissa",
        cidade: "Sumaré"
    },
    {
        nome: "Hugo",
        cidade: "São vicente"
    },
    {
        nome: "André",
        cidade: "Osasco"
    }
]


for(cliente of listaClientes) {
	console.log(cliente.nome)
}
//10) Faça um loop que imprima somente as cidades dos clientes da variável listaCliente

for(cliente of listaClientes) {
	console.log(cliente.cidade)
}