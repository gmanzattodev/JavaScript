const carros = []

let modelo = "ferrari"
let velocidade = 200
let temperatura = 20

carros.push({
    modelo: modelo,
    velocidade: velocidade,
    temperatura: temperatura
})

const modelos = carros.map((carro) => {
    return `${carro.modelo}: ${carro.velocidade}, ${carro.temperatura}`
})
console.log(modelos)