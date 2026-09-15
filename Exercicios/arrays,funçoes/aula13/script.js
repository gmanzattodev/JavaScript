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
const agendahorio = "15:00"

const find = agendamentos.find((busca) => {
    return busca.horario === agendahorio
})

if(find){
    console.log("Horario ocupado")
} else{
    console.log("Horario disponivel")
}