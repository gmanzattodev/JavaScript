const agendamentos = [
    {
        nome: "João",
        telefone: "111111111",
        horario: "14:00",
        servico: "Corte"
    },
    {
        nome: "Carlos",
        telefone: "222222222",
        horario: "15:00",
        servico: "Barba"
    },
    {
        nome: "Marcos",
        telefone: "333333333",
        horario: "16:00",
        servico: "Corte + Barba"
    }
];

let usuarioEscreveu = "15:00"

const agenda = agendamentos.map((agenda) => {
    return {
        nome: agenda.nome,
        horario: agenda.horario === usuarioEscreveu ? true : agenda.horario,
        servico: agenda.servico
    }
})

for (let i = 0; i < agenda.length; i++) {
    const element = agenda[i];
    if(element.horario === true){
        console.log("horario ocupado")
    }
}


