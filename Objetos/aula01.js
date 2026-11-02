const veiculo = {
    nome: "kombi",
    ano: 1240,
    cor: "Preta",
    velocidade: 50
}

//  modelo, ano, cor e velocidade são propriedades.
// "Kombi", 1998, "Branca" e 80 são valores.


// Acessando propriedades

console.log(veiculo.nome) // "kombi"
console.log(veiculo["ano"]) // 1240


// Alterando propriedades

veiculo.nome = "ferrari"
veiculo.ano = 2000

console.log(veiculo.nome) // ferrari

// metodo de delete propriedades

delete veiculo.cor

console.log(veiculo) // { nome: 'ferrari', ano: 2000, velocidade: 50 }

// funcao dentro de objetos

const carro = {
    nome: "kombi",
    motor: true,
    ligar: function() {
        console.log("carro ligado")
    }
}

carro.ligar() // carro ligado

// Objetos dentro de array

const veiculos = [
    { modelo: "Kombi", ano: 1998 }, // veiculos[0]
    { modelo: "Fusca", ano: 1980 }, // veiculos[1]
    { modelo: "Gol", ano: 2010 } // veiculos[2]
];

console.log(veiculos[0].modelo) // Kombi
console.log(veiculos[1].modelo) // Fusca

// EXERCICIO 1

const dispositivos = [
    {nome: "Motor", ligado: false, pino: 5},
    {nome: "Farol", ligado: true, pino: 2}
]

console.log(dispositivos[0].nome)
dispositivos[0].ligado = true

// Adicionando um terceiro objeto

dispositivos.push({
    nome: "Sensor",
    ligado: true,
    pino: 21
})
console.log(dispositivos)
console.log(dispositivos.length) // 3 


