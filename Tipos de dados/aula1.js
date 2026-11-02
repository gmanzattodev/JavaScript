const modelo = "fiat" // Variavel com nome "Modelo" que guarda uma string fiat
const ano = 2000 // Variavel com nome "ano" que guarda um Number 2000
const ligado = true // Variavel com nome "ligado" que guarda um boolean true ou false

console.log(typeof modelo) // String
console.log(typeof ano) // Number
console.log(typeof ligado) // Boolean

// Encontrar Erro

const velocidade = 100
velocidade = 21

if(velocidade > "80"){
    console.log("velocidade alta")
}

// Erro: TypeError

