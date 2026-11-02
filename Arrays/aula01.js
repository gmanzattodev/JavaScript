const carros = ["fiat", "fusca", "ferrari", "porsche", "mercedes"]
console.log(carros) // Mostra a array inteira
console.log(carros[0]) // Mostra somente "fiat" array começa em 0 

//Caso queira acessar o ultimo elemento

console.log(carros[carros.length -1]) // length: Informa a quantidades de elementos

// METODOS DE ARRAY

// push - Adiciona no final
carros.push("camaro") // estou adicionando mais um carro na array: ("carros")
console.log(carros) // [ 'fiat', 'fusca', 'ferrari', 'porsche', 'mercedes', 'camaro' ]

// unshift - adiciona no inicio
carros.unshift("BYD")
console.log(carros) // ['BYD', 'fiat', 'fusca', 'ferrari', 'porsche', 'mercedes', 'camaro']

// pop - Remove o ultimo elemento
carros.pop("camaro")
console.log(carros) // [ 'BYD', 'fiat', 'fusca', 'ferrari', 'porsche', 'mercedes' ]

// shift - Remove o primeiro elemento
carros.shift("BYD")
console.log(carros) // [ 'fiat', 'fusca', 'ferrari', 'porsche', 'mercedes' 


// Alterando elementos
// ["fiat", "fusca", "ferrari", "porsche", "mercedes"]
//     0        1       2           3           4
//                      "BYD"


carros[2] = "BYD"
console.log(carros) // [ 'fiat', 'fusca', 'BYD', 'porsche', 'mercedes' ]
