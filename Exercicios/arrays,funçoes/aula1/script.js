let velocidade = 0
const nome = "KOMBI"
velocidade = 200
const motor = {
    motorVelocidade: "desligado",
    parametro: 10,
    autonomia: 30,
    velocidade: 10
}
motor.motorVelocidade = "ligado"



console.log(`Veiculo: ${nome}, a velocidade: ${velocidade}, motor: ${motor.motorVelocidade}, total: ${motor.parametro + motor.autonomia + motor.velocidade}`)