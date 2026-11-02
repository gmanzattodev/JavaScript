const nome = "Giovani" // escopo Global esta fora de tudo

function valor(){
    const idade = 21 // escopo local só funciona dentro da funcao 

    console.log(nome, idade)
}
valor()


let numero = 21

if(numero == 21){
    let nome = "bloco" // escopo de bloco
}

console.log(nome)
console.log(idade) // SyntaxError