let velocidade = 20

velocidade += 10 // Velocidade + 10

console.log(velocidade > 40) // false
console.log(velocidade === 40) // false
console.log(velocidade / 3) // 10
console.log(velocidade % 2) // 0
console.log(velocidade -= 10) // 20

const motor = true
let bateria = true

console.log(bateria && motor) // true: tem que ser os dois verdadeiro

bateria = false

console.log(bateria || motor) // true: tem que ser pelo menos 1 verdadeiro
console.log(!bateria && motor) // true: "!" inverte o valor que é false fica true e que é true fica false