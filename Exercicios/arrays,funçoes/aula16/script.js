const atendimentos = [
  {
    cliente: "João",
    horario: "09:00",
    servico: "Corte",
    valor: 30,
  },
  {
    cliente: "Carlos",
    horario: "10:00",
    servico: "Barba",
    valor: 20,
  },
  {
    cliente: "Marcos",
    horario: "11:00",
    servico: "Corte + Barba",
    valor: 50,
  },
  {
    cliente: "Pedro",
    horario: "13:00",
    servico: "Corte",
    valor: 30,
  },
  {
    cliente: "Lucas",
    horario: "14:00",
    servico: "Corte + Barba",
    valor: 50,
  },
];

const TodosValores = atendimentos.every((todos) => {
    return todos.valor > 0
})
if(TodosValores){
    console.log("Todos os valores sao vailidos")
}  else {
    console.log("Existe valor invalido")
}