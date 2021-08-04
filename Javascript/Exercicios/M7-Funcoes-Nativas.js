// remova o último item da variável e depois guarde-a em outra variavel

const listaDeDoces = ["barra de chocolate","bombom","bala de goma","cocada"];

let doce = listaDeDoces.pop()
console.log(listaDeDoces)

let numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]


let raizQuadrada = numerosAleatorios.map(Math.sqrt)

console.log(raizQuadrada)

let dividePor2 = numerosAleatorios.map(function(num){
	return num / 2;
})

console.log(dividePor2)

//Crie uma função que retorna numeros pares e filtre os valores do array com filter()
const numPares = (num) => num % 2== 0;

let filtraPares = numerosAleatorios.filter(numPares);

console.log(filtraPares);