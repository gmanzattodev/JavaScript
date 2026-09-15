const produtos = [
    {
        nome: "Pizza Calabresa",
        preco: 45,
        quantidade: 2
    },
    {
        nome: "Coca-Cola",
        preco: 10,
        quantidade: 1
    }
];

const total = produtos.reduce((total, valor) => {
    return total + valor.preco * valor.quantidade
}, 0)

console.log(total)

const filtrado = produtos.filter((filtrado) => filtrado.preco > 20).map((add) => {
    return `${add.nome}`
})
console.log(filtrado)

const quantidade = produtos.find((quant) => {
    return quant.quantidade > 1
})

console.log(quantidade)

produtos[1].quantidade = 29

console.log(produtos)

for (let i = 0; i < produtos.length; i++) {
    const element = produtos[i];
    
    element.quantidade = 19
    console.log(element)
}