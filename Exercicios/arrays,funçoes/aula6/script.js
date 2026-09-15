let velocidade = 0
/*
while(velocidade < 200){
    velocidade++
    console.log(`Velocidade atual: ${velocidade}km/h`)
    if(velocidade == 20){
        console.log("limite de velocidade")
        velocidade = 20
    }
}
*/
const motor = true
do{
    velocidade++
    console.log(velocidade)
} while(motor ? velocidade = 1 : velocidade = 200)