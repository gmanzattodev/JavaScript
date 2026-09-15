
let velocidade = 0
const motor = true

if(motor){
    velocidade = "100"
}

switch(velocidade){
    case "0": 
        console.log("parado")
        break;

    case "10": 
        console.log("andando")
        break
    
    case "100": 
        console.log("critico")
        break
    
    default:
        console.log("nenhuma das alternativas")
    
    
}
