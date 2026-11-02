const dispositivos = [
    {nome: "Motor", ligado: false, pino: 5},
    {nome: "Farol", ligado: true, pino: 18},
    {nome: "Sensor", ligado: true, pino: 21}
]

let velocidade = "80"
velocidade = Number(velocidade)
const sistemaAtivo = true


if(velocidade > 80){
    console.log("Velocidade alta")
} else if(velocidade > 0 && velocidade <= 80){
    console.log("Velocidade normal")
} else {
    console.log("Veiculo parado")
}

function LigarMotor(ligar, mensagem){
    ligar.ligado = mensagem
}

for(const nomes of dispositivos){
    console.log(nomes.nome)
}

if(sistemaAtivo){
    LigarMotor(dispositivos[1], false)
    LigarMotor(dispositivos[2], false)
}
console.log(dispositivos)