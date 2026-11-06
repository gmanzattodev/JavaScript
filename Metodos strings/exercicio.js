const veiculo = "Fusca, kombi, MotorHome, camaro, BMW"

const array = veiculo.split(",")

const filtro = array[1]
const pedido = veiculo.toLowerCase().includes(filtro)

if(pedido){
    console.log("Pedido feito")
}

console.log(pedido)