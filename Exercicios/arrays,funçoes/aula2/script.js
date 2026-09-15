
let velocidade = 0
const limiteVelocidade = 220
const carro = {
    motor: false,
    autonomia: 400,
    ano: 2010,
    modelo: "ferrari"
}
if(carro.motor){
    velocidade = 110
}

const mensagem = `modelo do carro ${carro.modelo}, a velocidade atual: ${velocidade}, o limite é ${limiteVelocidade}`

// console.log(mensagem)

// ARRAYS

const modelos = ["ferrari", "BMW", "UNO", "Mobi"]
const velo = [40, 20, 100, 200, 10]
// console.log(modelos[2])

const soma = limiteVelocidade * velo[4]
console.log(soma)