function MotorLigado(){ // criando uma funcao onde dentro tem uma acao que mostra no terminal "Motor ligado"
    console.log("Motor ligado")
}

MotorLigado() // Execultando essa funcao

function CalcularValor(a, b){ // Esta recebendo 2 parametros onde tem a e b 
    return a + b // Esta retornado essa valor com o Argumento que vir
}

const resultado = CalcularValor(20, 10) // Estou colocando argumento a = 20 e b = 10, e guardando em uma variavel resultado 
console.log(resultado) // execultado a variavel com valor 30


// Criando uma funcao de verificar bateria

function VerificaçãoBateria(bateria){
    if(bateria <= 20){
        console.log("bateria baixa")
    } else if(bateria <= 60){
        console.log("bateria media")
    } else {
        console.log("bateria alta")
    }
}

VerificaçãoBateria(10 + 20) // Colocando o valor como 10 somando mais 20 ficando 30 dando o resultado de "bateira media"