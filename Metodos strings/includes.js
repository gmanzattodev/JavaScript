const Veiculo = "Giovani Kombi"

console.log(Veiculo.includes("Giovani")) // vai aparecer como True, se colocar o "G" minusculo vai ficar falso 
console.log(Veiculo.toLowerCase().includes("giovani")) // Agora mesmo com o g minusculo ele da true pq eu estou colocando o "toLowerCase()" para deixar tudo em minusculo e depois verifica se existe.
