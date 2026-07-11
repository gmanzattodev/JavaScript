const nome = "giovani"
let idade = 21
const status = false

console.log(nome)
console.log(idade)
setTimeout(() => {
    console.log("depois de alguns anos")
    idade = 25
    console.log(idade)
    if(!status){
        console.log("amanha e'meu aniversario")
    }
}, 4000)