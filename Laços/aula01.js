for(let i = 0; i <= 21; i++){ // esta execultando do 0 ao 21 onde: i recebe 0 se i for menor ou igual a 21 aumente + 1
    console.log(i) // execulta no terminal o valor do i que vai do 0 a 21

    if(i === 10){ // se for igual a 10 ele continua
        continue
    }
    if(i === 20){ // Quando i for igual a 10 ele para a repeticao
        break
    }
}

let bateria = 10

while (bateria < 100){ // execultado quando for true 
    console.log("Bateira cheira") // fica execultando essa acao até o while for false
    bateria++ // aumenta + 1 chegando no 100 ele para 
}

const modelos = ["canon", "nikon", "kombi", "fiat"]

for(const modelo of modelos){ // Percorre toda array pegando elemento por elemento
    if(modelo === "nikon"){
        continue;
    }
    if(modelo === "kombi"){
        break
    }
    console.log(modelo) // mostra na tela só canon
}