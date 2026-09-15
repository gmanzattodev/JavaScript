const servicos = [
    {
        cliente: "João",
        servico: "Corte",
        valor: 30
    },
    {
        cliente: "Carlos",
        servico: "Barba",
        valor: 20
    },
    {
        cliente: "Marcos",
        servico: "Corte + Barba",
        valor: 50
    },
    {
        cliente: "Pedro",
        servico: "Corte",
        valor: 30
    }
];

const resultado = servicos.reduce((total, valor) => {
    return total + valor.valor;

}, 0)
console.log(resultado)