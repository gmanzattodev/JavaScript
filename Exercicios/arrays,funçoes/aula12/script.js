const agendamentos = [
    {
        nome: "João",
        horario: "14:00",
        servico: "Corte"
    },
    {
        nome: "Carlos",
        horario: "15:00",
        servico: "Barba"
    },
    {
        nome: "Marcos",
        horario: "16:00",
        servico: "Corte + Barba"
    },
    {
        nome: "Pedro",
        horario: "17:00",
        servico: "Corte"
    }
];

const corteFiltrado = agendamentos.filter((corte) => {
    return corte.servico === "Corte"
})
console.log(corteFiltrado)

const agendoFiltrado = agendamentos.filter((agenda) =>{
    return agenda.horario >= "16:00"
})

const novo = corteFiltrado.map((element) => {
    return{
        nome: element.nome,
        horario: element.horario
    }
})
console.log(novo)