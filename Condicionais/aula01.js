let velocidade = 2
let motor = false // Aqui estou deixando como falso Esta desligado

if(velocidade <= 1){ // se a velocidade for menor que 1
    console.log(motor) // Mostrando no terminal se for true a condição
} else if (velocidade <= 4){ // Outra tentativa agora verificando se a velocidade for menor que 4
    motor = !motor // Inverte o valor deixando true
} else { // Se for falso o valor de cima execulta essa condição
    console.log("Motor desligado")
}

const valor = motor ? "Motor ligado" : "Motor desligado"
console.log(valor)

switch (velocidade) { // Esta comparando valor especifico
    case 1: // se velocidade for igual a 1 execulta esse, se tirar o break ele execulta se for 1 esse e mais o de baixo
        console.log("Primeira marcha")
        break
    case 2: // se for 2 execulta essa ação
        console.log("Segunda marcha")
        break
    default: // se nao for nenhuma das alternativas de cima execulta essa
        console.log("Nenhuma das alternativas")
}
// Anotação no Caderno

// IF - Execulta se é verdadeiro
// ELSE - Execulta se é falso
// ELSE IF - Testa Outra condição
// SWITCH - Compara valores especificos
// CASE - Representa uma possibilidade
// BREAK - Encerra a execução do caso
// DEFAULT - Execulta se nenhum dos caso for correspondente
// ? : - Condição resumida
